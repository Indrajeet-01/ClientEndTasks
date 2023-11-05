import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8pV1U8163zbcKsZOmO1cBALqlu1kbMCA",
    authDomain: "e-commerce-3c33f.firebaseapp.com",
    projectId: "e-commerce-3c33f",
    storageBucket: "e-commerce-3c33f.appspot.com",
    messagingSenderId: "766483714277",
    appId: "1:766483714277:web:7ba4e9200151edc0ec440c",
    measurementId: "G-RTNTHE4PR1"
  };

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);


