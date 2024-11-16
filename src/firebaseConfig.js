// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM8uuovtKDoa-WtYxt3rpuLrRiPvrJBpA",
  authDomain: "vue-retail-22c00.firebaseapp.com",
  projectId: "vue-retail-22c00",
  storageBucket: "vue-retail-22c00.firebasestorage.app",
  messagingSenderId: "934314324913",
  appId: "1:934314324913:web:38163bc67eeec6cfc04390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};