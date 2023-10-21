// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq4Icj5ATuYnzaOpbceeupXSoUwXmRxYc",
  authDomain: "mercaditoverde-c3956.firebaseapp.com",
  projectId: "mercaditoverde-c3956",
  storageBucket: "mercaditoverde-c3956.appspot.com",
  messagingSenderId: "996156400155",
  appId: "1:996156400155:web:08c04c94d329d943a54ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DataBase = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();