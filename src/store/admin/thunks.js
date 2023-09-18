import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyHotel, setActiveHotel, savingNewHotel, setHotels, setSaving, updateHotel, setPhotosToActiveHotel, deleteHotelById } from './';
import { fileUpload, loadHotels } from '../../helpers';

export const startNewHotel = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewHotel());
        const { uid } = getState().auth;

        const newHotel = {
            "hotelName": "Intercontinental",
            "location": 30,
            "numberBedRooms": 1,
            "state": true,
            "rate": 2,
            "wifi": false,
            "pool": false,
            "restaurant": false,
            "imgURL": 'https://images.unsplash.com/photo-1566071683285-e3558907b1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            "details": "The best rooms in the city"
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/admin/hotels`));
        // const setDocResp = await setDoc(newDoc, newHotel);
        await setDoc(newDoc, newHotel);

        newHotel.id = newDoc.id;

        dispatch(addNewEmptyHotel(newHotel));
        dispatch(setActiveHotel(newHotel));
    }
}

export const startLoadingHotels = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('Thunks => El UID del usuario no existe');

        const respNotes = await loadHotels(uid);

        if (respNotes === 0) throw new Error('Thunks => No existen notas');

        dispatch(setHotels(respNotes));
    }
}

export const startSaveHotel = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: hotelActive } = getState().admin;

        const noteToFireStore = { ...hotelActive };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/admin/hotels/${hotelActive.id}`)

        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateHotel(hotelActive));
    }
}

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
}

export const startDeletingHotel = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: hotelActive } = getState().admin;

        const docRef = doc(FirebaseDB, `${uid}/admin/hotels/${hotelActive.id}`);
        await deleteDoc(docRef);

        dispatch(deleteHotelById(hotelActive.id));
    }
}