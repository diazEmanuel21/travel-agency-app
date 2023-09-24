import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyHotel, setActiveHotel, savingNewHotel, setHotels, setSaving, updateHotel, setPhotosToActiveHotel, deleteHotelById } from './';
import { fileUpload, loadHotels } from '../../helpers';
import { getHotels } from '../home/homeSlice';

export const startNewHotel = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewHotel());
        // const { uid } = getState().auth;

        const newHotel = {
            // "id": "TZln44mBSPaUeitisiC5",
            "hotelName": "Name hotel",
            "imgURL": "https://images.unsplash.com/photo-1566071683285-e3558907b1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "wifi": false,
            "restaurant": false,
            "pool": false,
            "state": true,
            "rate": 1,
            "location": 1,
            "numberBedRooms": 1,
            "details": "Details hotel",
            "rooms": []
        };

        try {
            const newDoc = doc(collection(FirebaseDB, 'hotels'));
            await setDoc(newDoc, newHotel);

            newHotel.id = newDoc.id;

            dispatch(addNewEmptyHotel(newHotel));
            dispatch(setActiveHotel(newHotel));

            return { ok: true, message: "Hotel added successfully" };
        } catch (error) {
            console.error("Error adding hotel:", error);
            return { ok: false, errorMessage: "Failed to add hotel" };
        }
    }
};

export const startLoadingHotels = () => {
    return async (dispatch, getState) => {
        // const { uid } = getState().auth;
        // if (!uid) throw new Error('Thunks => El UID del usuario no existe');

        try {
            const respHotels = await loadHotels();

            if (respHotels === 0) {
                return { ok: false, errorMessage: 'There are no hotels' };
            }

            dispatch(setHotels(respHotels));
            dispatch(getHotels(respHotels));

            return { ok: true, message: 'Hotels loaded successfully' };
        } catch (error) {
            console.error('Error loading hotels:', error);
            return { ok: false, errorMessage: 'Failed to load hotels' };
        }
    }
};

export const startSaveHotel = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        // const { uid } = getState().auth;
        const { active: hotelActive } = getState().admin;

        // Copiar el objeto hotelActive y eliminar su propiedad 'id'
        const noteToFireStore = { ...hotelActive };
        delete noteToFireStore.id;

        // Obtener una referencia al documento en Firestore
        const docRef = doc(FirebaseDB, `hotels/${hotelActive.id}`);

        try {
            // Guardar el objeto en Firestore utilizando merge: true para actualizar sin reemplazar
            await setDoc(docRef, noteToFireStore, { merge: true });

            // Despachar una acción para actualizar el hotel en el estado de la tienda
            dispatch(updateHotel(hotelActive));

            // Devolver un objeto indicando éxito
            return { ok: true, message: 'Saved successfully' };
        } catch (error) {
            // Manejar cualquier error que pueda ocurrir durante el proceso de guardado
            console.error("Error al guardar el hotel:", error);

            // Devolver un objeto indicando error y un mensaje personalizado
            return { ok: false, errorMessage: 'Error al guardar el hotel' };
        }
    }
};



export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveHotel(photosUrls));
    }
};

export const startDeletingHotel = (id) => {
    return async (dispatch, getState) => {
        // const { uid } = getState().auth;

        try {
            const docRef = doc(FirebaseDB, `hotels/${id}`);
            await deleteDoc(docRef);

            dispatch(deleteHotelById(id));

            return { ok: true, message: "Hotel deleted successfully" };
        } catch (error) {
            console.error("Error deleting hotel:", error);
            return { ok: false, errorMessage: "Failed to delete hotel" };
        }
    }
};
