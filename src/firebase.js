import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyChXoWD42vKVf4k8FSp6FREKvjXgHPVHbk",
    authDomain: "chat-app-a47e8.firebaseapp.com",
    projectId: "chat-app-a47e8",
    storageBucket: "chat-app-a47e8.appspot.com",
    messagingSenderId: "688167094008",
    appId: "1:688167094008:web:5aad77606b1b1ddb195d0d",
    measurementId: "G-KM6X0M6DQK"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db=getFirestore()