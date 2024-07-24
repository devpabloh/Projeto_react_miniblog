import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoOYA2cuDy7hK1R-UDF3j_6DPtjbeHlV4",
    authDomain: "miniblog-6011c.firebaseapp.com",
    projectId: "miniblog-6011c",
    storageBucket: "miniblog-6011c.appspot.com",
    messagingSenderId: "473377532877",
    appId: "1:473377532877:web:e1c418830bb7fe019ff284"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };