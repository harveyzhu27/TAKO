// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPU5Q2b1hs-73yzTsxv139GZH07T-Ez_k",
  authDomain: "tako-10d42.firebaseapp.com",
  projectId: "tako-10d42",
  storageBucket: "tako-10d42.firebasestorage.app",
  messagingSenderId: "1070598966367",
  appId: "1:1070598966367:web:9bed2af602664deab7dfea",
  measurementId: "G-QF73DQ6EY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// (1) Add this import:
import { getAuth } from "firebase/auth";

// (2) Create and export the Auth instance:
const auth = getAuth(app);

import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);
export { auth, db };