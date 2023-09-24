import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../../firebase/config";

export const updateUserData = (uid, userData) => {
    return async (dispatch) => {
        try {
            const userDocRef = doc(FirebaseDB, 'users', uid);
            await setDoc(userDocRef, userData, { merge: true });

            return {
                ok: true,
                message: 'User data successfully updated.',
            };
        } catch (error) {
            return {
                ok: false,
                errorMessage: error.message,
            };
        }
    };
};

export const createBooking = (bookingData) => {
    return async (dispatch) => {
        try {
            const bookingDocRef = doc(collection(FirebaseDB, 'bookings'));
            await setDoc(bookingDocRef, bookingData);
            
            return { ok: true, message: 'Booking created successfully.' };
        } catch (error) {
            return { ok: false, errorMessage: 'Failed to create booking.' };
        }
    };
};
