// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4QZdxN8AUwYDwc-O_iBcgJQ6aqhcst3g",
  authDomain: "mit-kart-3e3e3.firebaseapp.com",
  projectId: "mit-kart-3e3e3",
  storageBucket: "mit-kart-3e3e3.appspot.com",
  messagingSenderId: "718844568830",
  appId: "1:718844568830:web:9cefcf1f190719096171af",
  measurementId: "G-5XY920WV7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export {auth,db}