// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
//las lineas de abajo son para configurar nuestra conexion con firestore (base de datos)
const firebaseConfig = {
  apiKey: "AIzaSyARqIJOlgG6UM5ReEwSVv2pBhziTSmBi5U",
  authDomain: "ecomerce-marcoslarraza.firebaseapp.com",
  projectId: "ecomerce-marcoslarraza",
  storageBucket: "ecomerce-marcoslarraza.appspot.com",
  messagingSenderId: "822359638505",
  appId: "1:822359638505:web:12b529739ea96c48a14b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Cloud Firestore and get eferenceto the service

export const db= getFirestore(app); //accede a la base de datos de firestore