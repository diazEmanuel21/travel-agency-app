import { collection, doc, getDoc, setDoc } from 'firebase/firestore/lite';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, /* updateProfile */ } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
        const userDocSnapshot = await getDoc(userDocRef);

        let userData = {
            uid,
            displayName,
            email,
            rol: 'user',
            photoURL,
            birthdate: null,
            gender: null,
            type_document: null,
            document_number: null,
            phone: null,
            name_contact: null,
            phone_contact: null,
            favorites: [],
            bookings: [],
        };

        if (userDocSnapshot.exists()) {
            userData = { ...userData, ...userDocSnapshot.data() };
        } else {
            // El usuario es nuevo, agregamos el documento con las propiedades iniciales
            await setDoc(userDocRef, userData);
        }

        return {
            ok: true,
            ...userData,
        };
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorCode,
            errorMessage,
            email,
            credential,
        };
    }
};

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
            birthdate: null, // Añadir birthdate
            gender: null, // Añadir gender
            type_document: null, // Añadir type_document
            document_number: null, // Añadir document_number
            phone: null, // Añadir phone
            name_contact: null, // Añadir name_contact
            phone_contact: null, // Añadir phone_contact
            favorites: [],
            bookings: [],
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
            displayName,
            birthdate: null, // Añadir birthdate
            gender: null, // Añadir gender
            type_document: null, // Añadir type_document
            document_number: null, // Añadir document_number
            phone: null, // Añadir phone
            name_contact: null, // Añadir name_contact
            phone_contact: null, // Añadir phone_contact
            favorites: [],
            bookings: [],
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
};

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, photoURL, uid } = result.user;

        // Aquí recuperamos el rol y otras propiedades del usuario desde Firestore
        const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data() || {};

        // Extraer las propiedades adicionales del usuario y proporcionar valores por defecto si están ausentes
        const {
            rol = "user",
            birthdate = null,
            gender = null,
            type_document = null,
            document_number = null,
            phone = null,
            name_contact = null,
            phone_contact = null,
            favorites = [],
            bookings = [],
        } = userData;

        return {
            ok: true,
            displayName,
            email,
            rol,
            photoURL,
            uid,
            birthdate,
            gender,
            type_document,
            document_number,
            phone,
            name_contact,
            phone_contact,
            favorites,
            bookings
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