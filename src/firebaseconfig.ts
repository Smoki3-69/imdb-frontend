import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

import { Auth } from "firebase/auth";

declare module "firebase/auth" {
  interface Auth {
    signInWithEmailAndPassword: (auth: Auth, email: string, password: string) => Promise<any>;
  }
}


const firebaseConfig = {
  apiKey: "AIzaSyD6mg2L4h1K02mFgBgK8Ij8zfFzNMHoNUw",
  authDomain: "caress-d79cd.firebaseapp.com",
  projectId: "caress-d79cd",
  storageBucket: "caress-d79cd.firebasestorage.app",
  messagingSenderId: "474793383523",
  appId: "1:474793383523:web:7221fc3369298369604a56"
};


export const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);