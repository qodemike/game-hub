// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const APIKEY = import.meta.env.VITE_FIREBASE_API_KEY
const AUTHDOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const PROJECTID = import.meta.env.VITE_FIREBASE_PROJECTID
const STORAGEBUCKET = import.meta.env.VITE_FIREBASE_STORAGEBUCKET
const MESSAGINGSENDERID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID 
const APPID = import.meta.env.VITE_FIREBASE_APP_ID 
const MEASUREMENTID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)