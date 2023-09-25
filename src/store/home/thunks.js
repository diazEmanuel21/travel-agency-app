import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../../firebase/config";
import { setBooking } from './homeSlice';
import { setReserves } from '../user/userSlice';

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

            dispatch(setBooking([bookingData]));
            return { ok: true, message: 'Booking created successfully.' };
        } catch (error) {
            return { ok: false, errorMessage: 'Failed to create booking.' };
        }
    };
};

export const fetchReserves = () => {
    return async (dispatch) => {
        try {
            const bookingCollectionRef = collection(FirebaseDB, 'bookings');
            const querySnapshot = await getDocs(bookingCollectionRef);
            const reservesData = querySnapshot.docs.map((doc) => doc.data());

            dispatch(setReserves(reservesData));

            return { ok: true, message: 'Reserves data fetched successfully.' };
        } catch (error) {
            console.error('Error fetching reserves:', error);
            return { ok: false, errorMessage: 'Failed to fetch reserves data.' };
        }
    };
};