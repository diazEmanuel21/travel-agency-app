// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBddQphQvL4ZV1YBu6GSXxoXVZ9TaFtAKg",
  authDomain: "diamond-agency-app.firebaseapp.com",
  projectId: "diamond-agency-app",
  storageBucket: "diamond-agency-app.appspot.com",
  messagingSenderId: "624951903899",
  appId: "1:624951903899:web:003f1085870e623460e83e",
  measurementId: "G-X6V3GVZDNX"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const analytics = getAnalytics(FirebaseApp);