import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJs62YCw2cKTM0ggiX_mffu6igziWTok",
  authDomain: "discord-clone-87fcf.firebaseapp.com",
  projectId: "discord-clone-87fcf",
  storageBucket: "discord-clone-87fcf.appspot.com",
  messagingSenderId: "342567211621",
  appId: "1:342567211621:web:269bc6d9b668c20acd6c8c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, db, provider}