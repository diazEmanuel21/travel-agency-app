import { loginWithEmailPassword, logoutFirebase, registerUserWhitEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearHotelsLogout } from "../admin/adminSlice";
import { chekingCredentials, login, logout } from "./";

export const chekingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startCreatingUserWhitEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const { ok, rol, uid, photoURL, errorMessage } = await registerUserWhitEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }));
        /* crea coleccion */
        dispatch(login({ uid, rol, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await loginWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(clearHotelsLogout());
        dispatch(logout({ errorMessage: '' }));
    }
}