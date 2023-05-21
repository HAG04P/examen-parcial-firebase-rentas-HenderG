// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHXxCJ8LUro5lFwdxjCfOOO40qjq3Sk2M",
  authDomain: "examen-iii-ec475.firebaseapp.com",
  projectId: "examen-iii-ec475",
  storageBucket: "examen-iii-ec475.appspot.com",
  messagingSenderId: "227784670073",
  appId: "1:227784670073:web:cc12315bc8defe83938da8",
  measurementId: "G-HSKSESJQYQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Conectar a la base de datos
export const db = getFirestore(app);