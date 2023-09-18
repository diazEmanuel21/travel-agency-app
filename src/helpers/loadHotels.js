import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadHotels = async (uid = '') => {
    if (!uid) throw new Error('LoadNotes => El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/admin/hotels`);
    const docs = await getDocs(collectionRef);

    const hotels = [];

    docs.forEach(doc => {
        hotels.push({ id: doc.id, ...doc.data() })
    });

    return hotels;
}