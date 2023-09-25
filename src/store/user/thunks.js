import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const addRoomToFavorites = (userId, roomId) => {
    return async (dispatch, getState) => {
        try {
            // Crear una referencia al documento del usuario
            const userDocRef = doc(FirebaseDB, `users/${userId}`);

            // Obtener los datos del usuario
            const userSnapshot = await getDoc(userDocRef);
            const userData = userSnapshot.data();

            // Verificar si la habitación ya está en la lista de favoritos
            if (userData.favorites && userData.favorites.includes(roomId)) {
                return { ok: false, errorMessage: 'The room is already in your favorites.' };
            };

            // Si la habitación no está en la lista, agregarla
            const updatedFavorites = userData.favorites ? [...userData.favorites, roomId] : [roomId];

            // Actualizar el documento del usuario con la nueva lista de favoritos
            await updateDoc(userDocRef, { favorites: updatedFavorites });

            return { ok: true, message: 'Room added to favorites successfully.' };
        } catch (error) {
            console.error('Error adding room to favorites:', error);
            return { ok: false, errorMessage: 'Failed to add room to favorites.' };
        }
    };
};

export const addRoomToBookings = (userId, roomId) => {
    return async (dispatch, getState) => {
        try {
            // Crear una referencia al documento del usuario
            const userDocRef = doc(FirebaseDB, `users/${userId}`);
            // Obtener los datos del usuario
            const userSnapshot = await getDoc(userDocRef);
            const userData = userSnapshot.data();

            // Verificar si la habitación ya está en la lista de reservas
            if (userData.bookings && userData.bookings.includes(roomId)) {
                return { ok: false, errorMessage: 'The room is already in your bookings.' };
            };

            // Si la habitación no está en la lista, agregarla
            const updatedBookings = userData.bookings ? [...userData.bookings, roomId] : [roomId];

            // Actualizar el documento del usuario con la nueva lista de reservas
            await updateDoc(userDocRef, { bookings: updatedBookings });

            return { ok: true, message: 'Room added to bookings successfully.' };
        } catch (error) {
            console.error('Error adding room to bookings:', error);
            return { ok: false, errorMessage: 'Failed to add room to bookings.' };
        }
    };
};
