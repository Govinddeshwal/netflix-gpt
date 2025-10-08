// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6EZL-EC0xYnbZmNjIzsnVoP56tfiqUgo",
  authDomain: "netflixgpt-e6c7d.firebaseapp.com",
  projectId: "netflixgpt-e6c7d",
  storageBucket: "netflixgpt-e6c7d.firebasestorage.app",
  messagingSenderId: "572246589821",
  appId: "1:572246589821:web:1d881aee37ca76d7020c14",
  measurementId: "G-5KB7ZCKPRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
