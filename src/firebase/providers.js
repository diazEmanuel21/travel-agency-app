import { collection, doc, getDoc, setDoc } from 'firebase/firestore/lite';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, /* updateProfile */ } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        // Comprobamos si el usuario ya existe en la colección "users" de Firestore
        const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
        const userDocSnapshot = await getDoc(userDocRef);

        // Variable para almacenar el rol
        let rol = 'user';

        if (!userDocSnapshot.exists()) {
            // El usuario es nuevo, agregamos el documento con el rol y otros datos
            await setDoc(userDocRef, {
                uid,
                displayName,
                email,
                rol,
                photoURL,
            });
        } else {
            // El usuario ya existe, recuperamos su rol desde Firestore
            const userData = userDocSnapshot.data();
            rol = userData?.rol || rol;
        }

        return {
            ok: true,
            displayName,
            email,
            rol,
            photoURL,
            uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorCode, errorMessage, email, credential
        }
    }
}

export const registerUserWhitEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        const newUser = {
            uid,
            photoURL,
            email,
            rol: 'user',
            displayName,
        }

        // Crea una referencia a la colección 'users' en Firestore y luego a un documento con el UID como nombre
        const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
        await setDoc(userDocRef, newUser);

        return {
            ok: true,
            uid,
            photoURL,
            email,
            rol: 'user',
            displayName
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, photoURL, uid } = result.user;

        // Aquí recuperamos el rol del usuario desde Firestore
        const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();

        // Agregamos el rol al objeto user
        const rol = userData?.rol || "user";

        return {
            ok: true,
            displayName,
            email,
            rol,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}