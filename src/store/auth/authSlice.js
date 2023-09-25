import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking', //'cheking', 'not-authenticated', 'authenticated',
        uid: null,
        email: null,
        rol: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        /* After update user */
        birthdate: null,
        gender: null,
        type_document: null,
        document_number: null,
        phone: null,
        name_contact: null,
        phone_contact: null,
        bookings: [],
        favorites: [],
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.rol = payload.rol;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            /* After update user */
            state.birthdate = payload.birthdate;
            state.gender = payload.gender;
            state.type_document = payload.type_document;
            state.document_number = payload.document_number;
            state.phone = payload.phone;
            state.name_contact = payload.name_contact;
            state.phone_contact = payload.phone_contact;
            state.bookings = payload.bookings;
            state.favorites = payload.favorites;
            /* MSJ */
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.rol = null;
            state.displayName = null;
            state.photoURL = null;
            /* After update user */
            state.birthdate = null;
            state.gender = null;
            state.type_document = null;
            state.document_number = null;
            state.phone = null;
            state.name_contact = null;
            state.phone_contact = null;
            state.bookings = [];
            state.favorites = [];
            /* MSJ */
            state.errorMessage = payload?.errorMessage;
        },
        updateBooking: (state, action) => {
            state.bookings = action.payload;
        },
        chekingCredentials: (state) => {
            state.status = 'cheking'
        }
    }
});
export const { login, logout, chekingCredentials, updateBooking } = authSlice.actions;