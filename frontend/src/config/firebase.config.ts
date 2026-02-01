import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi2A6HHMEFZCW5jPvs5eMPc73OC7P_uMw",
  authDomain: "club-ecommerce-2-dcb1a.firebaseapp.com",
  projectId: "club-ecommerce-2-dcb1a",
  storageBucket: "club-ecommerce-2-dcb1a.firebasestorage.app",
  messagingSenderId: "566554037413",
  appId: "1:566554037413:web:b271bb01cf0834047dd14c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
