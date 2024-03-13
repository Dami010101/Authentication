// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIw1o2myqBi9bTvHbk4s4hB4OjOaF4Xjg",
  authDomain: "sign-up-page-abfe1.firebaseapp.com",
  projectId: "sign-up-page-abfe1",
  storageBucket: "sign-up-page-abfe1.appspot.com",
  messagingSenderId: "546499768021",
  appId: "1:546499768021:web:4e457d2c7dd22f94b2bc5c",
  measurementId: "G-VJ7MZZP8DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);