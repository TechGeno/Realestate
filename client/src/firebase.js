// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0wR4PVdu7HAeTAo9Dx5T4C_0sQc0Srdo"  ,
  authDomain: "mern-ecommerce-79851.firebaseapp.com",
  projectId: "mern-ecommerce-79851",
  storageBucket: "mern-ecommerce-79851.appspot.com",
  messagingSenderId: "357192493388",
  appId: "1:357192493388:web:209c431f304b74951887e9",
  measurementId: "G-KF4G5DBZZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
