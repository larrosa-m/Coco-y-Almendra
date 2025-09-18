// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZEQMgmhi1WIBMRy0CgZvnaMtHx_HYt8",
  authDomain: "coco-y-almendra.firebaseapp.com",
  projectId: "coco-y-almendra",
  storageBucket: "coco-y-almendra.firebasestorage.app",
  messagingSenderId: "797350893359",
  appId: "1:797350893359:web:c979978d1904f2ad3473da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)