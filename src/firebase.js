import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBf3sZUiuB-jKJPV-rlnc6vhFmKdet8eTM",
  authDomain: "linkedin-clone-fc28a.firebaseapp.com",
  projectId: "linkedin-clone-fc28a",
  storageBucket: "linkedin-clone-fc28a.appspot.com",
  messagingSenderId: "206857197298",
  appId: "1:206857197298:web:b85a611b3d689ebf5e626b",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
