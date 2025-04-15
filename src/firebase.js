
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtYN2Qh7c0W68sIQHgTSJgNCG5EGMKEfU",
  authDomain: "task-gpt-c92cd.firebaseapp.com",
  projectId: "task-gpt-c92cd",
  storageBucket: "task-gpt-c92cd.appspot.com",
  messagingSenderId: "181498745929",
  appId: "1:181498745929:web:ad63ed89385ba51a61b98",
  measurementId: "G-W9Y996XRB5"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export { auth };
