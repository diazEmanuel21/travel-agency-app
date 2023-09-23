import { useContext, useEffect } from "react";
import { getDoc, doc, collection } from "firebase/firestore/lite";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth, FirebaseDB } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingHotels } from "../store/admin";
import { setShowBackdrop } from "../store/home/homeSlice";
import { TravelAgencyContext } from "../context";

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth);
    const { setNotify } = useContext(TravelAgencyContext);


    const handleLoadingHotel = async () => {
        dispatch(setShowBackdrop(true));
        const result = await dispatch(startLoadingHotels());
        if (result.ok) {
            dispatch(setShowBackdrop(false));
            setNotify('success', result.message);
        } else {
            dispatch(setShowBackdrop(false));
            setNotify('error', result.errorMessage);
        }
    };

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
            handleLoadingHotel()
        });
    }, []);

    return status;
};
