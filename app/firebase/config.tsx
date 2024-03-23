// import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);

// 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

export const auth = getAuth();