import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZSPmezINHCtXcFgyM_hIShvMBJwALQCA",
  authDomain: "latchscore.firebaseapp.com",
  projectId: "latchscore",
  storageBucket: "latchscore.appspot.com",
  messagingSenderId: "904406646700",
  appId: "1:904406646700:web:beb12c6c75184428154409",
  measurementId: "G-XJX48TDYF7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
