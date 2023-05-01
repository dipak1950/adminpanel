import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfzpDCd5psVN5AKlBGcDEwjcrt4vTRuaw",
    authDomain: "admin-panel-d0461.firebaseapp.com",
    projectId: "admin-panel-d0461",
    storageBucket: "admin-panel-d0461.appspot.com",
    messagingSenderId: "1084759048526",
    appId: "1:1084759048526:web:fd1ad7c1e96c6d91d1de1f"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);