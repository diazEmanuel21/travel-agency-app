import { getDoc, doc, collection } from "firebase/firestore/lite";
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

            // Aquí recuperamos el rol y otras propiedades del usuario desde Firestore
            const userDocRef = doc(collection(FirebaseDB, 'users'), uid);
            const userDocSnapshot = await getDoc(userDocRef);
            const userData = userDocSnapshot.data() || {};

            // Extraer las propiedades adicionales del usuario y proporcionar valores por defecto si están ausentes
            const {
                rol = 'user',
                birthdate = null,
                gender = null,
                type_document = null,
                document_number = null,
                phone = null,
                name_contact = null,
                phone_contact = null,
            } = userData;

            // Agregar todas las propiedades al objeto user
            dispatch(login({
                uid,
                email,
                displayName,
                photoURL,
                rol,
                birthdate,
                gender,
                type_document,
                document_number,
                phone,
                name_contact,
                phone_contact,
            }));
            dispatch(startLoadingHotels());
        });
    }, []);

    return status;
};
