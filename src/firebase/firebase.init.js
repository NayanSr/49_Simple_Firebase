// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_EoD9pC2WKhapA2M7VErOYsz9PAa2_0w",
  authDomain: "simple-firebase-49-3a897.firebaseapp.com",
  projectId: "simple-firebase-49-3a897",
  storageBucket: "simple-firebase-49-3a897.firebasestorage.app",
  messagingSenderId: "622031977597",
  appId: "1:622031977597:web:c1c5cf6f0ee8af64e2c514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;