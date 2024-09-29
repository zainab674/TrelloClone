// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWo9LFjvhOV8648OD4dQn0RxDfwrzW5aY",
    authDomain: "trelloclone-e2f3d.firebaseapp.com",
    projectId: "trelloclone-e2f3d",
    storageBucket: "trelloclone-e2f3d.appspot.com",
    messagingSenderId: "794052094582",
    appId: "1:794052094582:web:32e9d4298b7f0fabb48d57",
    measurementId: "G-M0ZD63XYV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app)
export const google = new GoogleAuthProvider();