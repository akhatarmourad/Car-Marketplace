// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "car-marketplace-reactjs.firebaseapp.com",
  projectId: "car-marketplace-reactjs",
  storageBucket: "car-marketplace-reactjs.appspot.com",
  messagingSenderId: "731707071536",
  appId: "1:731707071536:web:2a3dc2a1e1a573164ee1f5",
  measurementId: "G-41HZ8EDDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage = getStorage(app);