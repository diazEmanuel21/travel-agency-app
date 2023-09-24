import { loginWithEmailPassword, logoutFirebase, registerUserWhitEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearHotelsLogout } from "../admin/adminSlice";
import { chekingCredentials, login, logout } from "./";

export const chekingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        // Despacha toda la información obtenida
        dispatch(login({
            uid: result.uid,
            displayName: result.displayName,
            email: result.email,
            rol: result.rol,
            photoURL: result.photoURL,
            birthdate: result.birthdate,
            gender: result.gender,
            type_document: result.type_document,
            document_number: result.document_number,
            phone: result.phone,
            name_contact: result.name_contact,
            phone_contact: result.phone_contact,
            favorites: result.favorites,
            bookings: result.bookings,
        }));
    }
};

export const startCreatingUserWhitEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const {
            ok,
            rol,
            uid,
            photoURL,
            errorMessage,
            birthdate,
            gender,
            type_document,
            document_number,
            phone,
            name_contact,
            phone_contact,
            favorites,
            bookings
        } = await registerUserWhitEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }));

        // Despacha toda la información obtenida
        dispatch(login({
            uid,
            rol,
            displayName,
            email,
            photoURL,
            birthdate,
            gender,
            type_document,
            document_number,
            phone,
            name_contact,
            phone_contact,
            favorites,
            bookings
        }));
    }
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const {
            ok,
            rol,
            uid,
            displayName,
            photoURL,
            errorMessage,
            birthdate,
            gender,
            type_document,
            document_number,
            phone,
            name_contact,
            phone_contact,
            favorites,
            bookings
        } = await loginWithEmailPassword({ email, password });

        if (!ok) return dispatch(logout({ errorMessage }));

        // Despacha toda la información obtenida
        dispatch(login({
            uid,
            rol,
            displayName,
            email,
            photoURL,
            birthdate,
            gender,
            type_document,
            document_number,
            phone,
            name_contact,
            phone_contact,
            favorites,
            bookings
        }));
    }
};

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(clearHotelsLogout());
        dispatch(logout({ errorMessage: '' }));
    }
};