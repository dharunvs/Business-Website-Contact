import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyCOCB4AuAKZKDMFfew-AM0xoaGOStPVbRE",
    authDomain: "vibrant-d-x.firebaseapp.com",
    projectId: "vibrant-d-x",
    storageBucket: "vibrant-d-x.appspot.com",
    messagingSenderId: "845073598824",
    appId: "1:845073598824:web:97e6647f642f9f81d06edd",
    measurementId: "G-YZH0KCTJQH",
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};

export default fb;
