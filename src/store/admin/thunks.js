import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyHotel, setActiveHotel, savingNewHotel, setHotels, setSaving, updateHotel, setPhotosToActiveHotel, deleteHotelById } from './';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewHotel());
        const { uid } = getState().auth;

        const newHotel = {
            "hotelName": "Intercontinental",
            "location": 30,
            "numberBedRooms": 7,
            "state": true,
            "rate": 2,
            "wifi": false,
            "pool": false,
            "restaurant": false,
            "imgURL": 'https://images.unsplash.com/photo-1566071683285-e3558907b1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            "details": "Establecimiento cuyo principal servicio es el hospedaje, ofreciendo a las personas cierto nivel de confort y seguridad durante sus estadías",
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/admin/hotels`));
        // const setDocResp = await setDoc(newDoc, newHotel);
        await setDoc(newDoc, newHotel);

        newHotel.id = newDoc.id;

        dispatch(addNewEmptyHotel(newHotel));
        dispatch(setActiveHotel(newHotel));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('Thunks => El UID del usuario no existe');

        const respNotes = await loadNotes(uid);

        if (respNotes === 0) throw new Error('Thunks => No existen notas');

        dispatch(setHotels(respNotes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: noteActive } = getState().admin;

        const noteToFireStore = { ...noteActive };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/admin/hotels/${noteActive.id}`)

        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateHotel(noteActive));
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

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: noteActive } = getState().admin;

        const docRef = doc(FirebaseDB, `${uid}/admin/hotels/${noteActive.id}`);
        await deleteDoc(docRef);

        dispatch(deleteHotelById(noteActive.id));
    }
}