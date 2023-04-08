import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPLhduEKMW-8nXZ4-oh5Vnu7tjSuMpg3I",
  authDomain: "challenge-272d5.firebaseapp.com",
  projectId: "challenge-272d5",
  storageBucket: "challenge-272d5.appspot.com",
  messagingSenderId: "1001773478074",
  appId: "1:1001773478074:web:f15d1d6605262769c7d283",
  measurementId: "G-Z1G5KF2L6D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
