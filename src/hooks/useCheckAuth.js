import { getDoc, doc, collection } from "firebase/firestore/lite"; // Importa las funciones necesarias para trabajar con Firestore
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth, FirebaseDB } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingHotels } from "../store/admin";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { uid, email, displayName, photoURL } = user;

            // Aquí recuperamos el rol del usuario desde Firestore
            const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
            const userDocSnapshot = await getDoc(userDocRef);
            const userData = userDocSnapshot.data();

            // Agregamos el rol al objeto user
            const rol = userData?.rol || "user";

            dispatch(login({ uid, email, displayName, photoURL, rol }));
            dispatch(startLoadingHotels());
        });
    }, [])

    return status;
}
