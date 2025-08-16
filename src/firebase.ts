// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAPU5Q2b1hs-73yzTsxv139GZH07T-Ez_k",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tako-10d42.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tako-10d42",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tako-10d42.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1070598966367",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1070598966367:web:9bed2af602664deab7dfea",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-QF73DQ6EY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create and export the Auth instance:
const auth = getAuth(app);

const db = getFirestore(app);
export { auth, db };
