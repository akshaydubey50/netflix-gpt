// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDg-5Nrb6_wzaoA-p-abNosdam5jHFdAsQ",
    authDomain: "netflixgpt-14e20.firebaseapp.com",
    projectId: "netflixgpt-14e20",
    storageBucket: "netflixgpt-14e20.appspot.com",
    messagingSenderId: "865170783195",
    appId: "1:865170783195:web:689ef57b8d37eaad7645fe",
    measurementId: "G-XN3BRVW7HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();