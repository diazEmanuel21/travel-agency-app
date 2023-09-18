import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: ' ',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/admin/notes`));
        // const setDocResp = await setDoc(newDoc, newNote);
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('Thunks => El UID del usuario no existe');

        const respNotes = await loadNotes(uid);

        if (respNotes === 0) throw new Error('Thunks => No existen notas');

        dispatch(setNotes(respNotes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: noteActive } = getState().admin;

        const noteToFireStore = { ...noteActive };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/admin/notes/${noteActive.id}`)

        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(noteActive));
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
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: noteActive } = getState().admin;

        const docRef = doc(FirebaseDB, `${uid}/admin/notes/${noteActive.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(noteActive.id));
    }
}