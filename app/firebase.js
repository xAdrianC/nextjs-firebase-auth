import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNkr4wLjr8NWsDrTCBhhbJRyA_NVyLkNc",
  authDomain: "nextjs-auth-firebase-deb58.firebaseapp.com",
  projectId: "nextjs-auth-firebase-deb58",
  storageBucket: "nextjs-auth-firebase-deb58.appspot.com",
  messagingSenderId: "474164799749",
  appId: "1:474164799749:web:4340ff220cff54fd276f6c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);