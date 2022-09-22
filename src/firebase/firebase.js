// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzXZNvya_VKkxGXt3lJ3qVnvtnXNcoUj4",
  authDomain: "ecommercediaz.firebaseapp.com",
  projectId: "ecommercediaz",
  storageBucket: "ecommercediaz.appspot.com",
  messagingSenderId: "976466856867",
  appId: "1:976466856867:web:f4b9e650b4885b0c7b2816",
  measurementId: "G-2CE7LRN4F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
