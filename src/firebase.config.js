// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs_kdVKOVKA42Y2LD5oxDluipzlzfqCnQ",
  authDomain: "clone-396d9.firebaseapp.com",
  projectId: "clone-396d9",
  storageBucket: "clone-396d9.appspot.com",
  messagingSenderId: "231949976552",
  appId: "1:231949976552:web:aa99ef5e5577d12ccd5a5d",
  measurementId: "G-T16DKSLJWK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
