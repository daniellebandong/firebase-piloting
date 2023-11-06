// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5vlvxsunfcw6Ig4Z5_xf66NLtz6uM2jo",
  authDomain: "fir-pilot-2f44e.firebaseapp.com",
  projectId: "fir-pilot-2f44e",
  storageBucket: "fir-pilot-2f44e.appspot.com",
  messagingSenderId: "1053709528927",
  appId: "1:1053709528927:web:76658667056c51117310ea",
  measurementId: "G-K2PKXM7MK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);