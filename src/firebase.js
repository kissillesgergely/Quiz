// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAumsTFXw9KlNUUHHf5GhgBgok61dIrrg0",
  authDomain: "project-geri.firebaseapp.com",
  projectId: "project-geri",
  storageBucket: "project-geri.appspot.com",
  messagingSenderId: "499958146260",
  appId: "1:499958146260:web:2b79abbd426a3b99f2c741",
  databaseURL: 'https://project-geri-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);