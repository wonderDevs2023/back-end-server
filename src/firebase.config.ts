// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZi39GBGW0O-1OFPGBL00LHDKu-6xjg0",
  authDomain: "gymmanagementsystem-c3c7a.firebaseapp.com",
  projectId: "gymmanagementsystem-c3c7a",
  storageBucket: "gymmanagementsystem-c3c7a.appspot.com",
  messagingSenderId: "84291802542",
  appId: "1:84291802542:web:6b79510247a07d9880643f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// iinitialize auth
export const auth = getAuth(app)