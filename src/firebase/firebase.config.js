// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOiYV-T75qYxYRQ8pKpz3Z2LZKjnNk6Ew",
  authDomain: "ema-john-firebase-deploy.firebaseapp.com",
  projectId: "ema-john-firebase-deploy",
  storageBucket: "ema-john-firebase-deploy.appspot.com",
  messagingSenderId: "897965943546",
  appId: "1:897965943546:web:d6165fc59a5d206aad3743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;