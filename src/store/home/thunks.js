import { doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../../firebase/config";

export const updateUserData = (uid, userData) => {
    return async (dispatch) => {
        try {
            // Crea una referencia al documento del usuario en Firestore
            const userDocRef = doc(FirebaseDB, 'users', uid);

            // Actualiza los datos del usuario en el documento
            await setDoc(userDocRef, userData, { merge: true });

            // Aquí puedes despachar alguna acción de éxito si es necesario
            // dispatch(login());

            return {
                ok: true,
                message: 'User data successfully updated.',
            };
        } catch (error) {
            // Manejo de errores, puedes despachar una acción de error si es necesario
            // dispatch(actualizarUsuarioError(error));

            return {
                ok: false,
                errorMessage: error.message,
            };
        }
    };
};
