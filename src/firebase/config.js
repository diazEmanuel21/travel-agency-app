// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web FirebaseApp's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUMP2lTJdnEnSfpeDEVOZ0DUdKRTkJ6BE",
    authDomain: "journalapp-react-js.firebaseapp.com",
    projectId: "journalapp-react-js",
    storageBucket: "journalapp-react-js.appspot.com",
    messagingSenderId: "992599525120",
    appId: "1:992599525120:web:31d7b8db80795cd19755e5",
    measurementId: "G-QELQYFHWW5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const analytics = getAnalytics(FirebaseApp);