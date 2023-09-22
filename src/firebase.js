// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage"
// import { getFirestore } from "firebase/firestore"
import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";



const firebaseConfig = {
    apiKey: "AIzaSyC6l7B1XkzCaPSSO-2AYk4xO17NgcQtvP4",
    authDomain: "law-data-45a69.firebaseapp.com",
    projectId: "law-data-45a69",
    storageBucket: "law-data-45a69.appspot.com",
    messagingSenderId: "75592783063",
    appId: "1:75592783063:web:3aa65749a6353c39228c92",
    measurementId: "G-G492LJ8RPP"
  };
  // const app = initializeApp(firebaseConfig);
  // const storage = getStorage(app);
  // const db = getFirestore(app);
  // export {db, storage}
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
export {db, storage};