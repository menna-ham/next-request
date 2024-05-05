// import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZxFLihZYVE4utOZ71LjSTnI_ZJrIWCfo",
  authDomain: "nextauth-37dd1.firebaseapp.com",
  projectId: "nextauth-37dd1",
  storageBucket: "nextauth-37dd1.appspot.com",
  messagingSenderId: "643488714691",
  appId: "1:643488714691:web:083ff2ca6785708abcb776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage()

export { auth, storage};
