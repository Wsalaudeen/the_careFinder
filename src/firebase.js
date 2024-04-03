// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrMyOjLPRfVphyDCeNJb7lC8Z9mEvXjr0",
  authDomain: "carefinder-react.firebaseapp.com",
  projectId: "carefinder-react",
  storageBucket: "carefinder-react.appspot.com",
  messagingSenderId: "1064651925020",
  appId: "1:1064651925020:web:5bced0e13031463cf4a1d9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const colRef = collection(db, "hospitalresults");
export const getAllData = getDocs;
export const singleDoc = doc;
export const getSingleDoc = getDocs;
export const trackDataInDB = onSnapshot;
export default firebaseConfig;
