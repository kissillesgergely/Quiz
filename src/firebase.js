import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
// import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAumsTFXw9KlNUUHHf5GhgBgok61dIrrg0",
  authDomain: "project-geri.firebaseapp.com",
  databaseURL: "https://project-geri-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-geri",
  storageBucket: "project-geri.appspot.com",
  messagingSenderId: "499958146260",
  appId: "1:499958146260:web:2b79abbd426a3b99f2c741"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);

console.log('in the firebase file');

export { firebaseApp };
export { auth };
export { db };