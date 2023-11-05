// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/database"; // For Realtime Database
import "firebase/compat/firestore"; // For Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMa1MgWb2DGt9RayPGkOn_6qUHhNFCnxA",
  authDomain: "e-commerce-4140f.firebaseapp.com",
  projectId: "e-commerce-4140f",
  storageBucket: "e-commerce-4140f.appspot.com",
  messagingSenderId: "342801146009",
  appId: "1:342801146009:web:b488d6a400b2458dbb5808",
  measurementId: "G-CVLW8PDD2M"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
export const collection = firebaseapp.collection();