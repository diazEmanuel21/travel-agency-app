import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadHotels = async () => {
    // if (!uid) throw new Error('LoadNotes => El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `hotels`);
    const docs = await getDocs(collectionRef);

    const hotels = [];

    docs.forEach(doc => {
        hotels.push({ id: doc.id, ...doc.data() })
    });

    return hotels;
}