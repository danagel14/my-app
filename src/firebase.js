// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtYN2Qh7c0W68sIQHgTSJgNCG5EGMKEfU",
  authDomain: "task-gpt-c92cd.firebaseapp.com",
  projectId: "task-gpt-c92cd",
  storageBucket: "task-gpt-c92cd.firebasestorage.app",
  messagingSenderId: "181498745929",
  appId: "1:181498745929:web:ad63ed089385ba51a61b98",
  measurementId: "G-WSY99GXR85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth };