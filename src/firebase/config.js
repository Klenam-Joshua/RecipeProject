import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDW7-EcavlDZGj8JA2hrWWNsHFnTP0BNe8",
    authDomain: "cooking-guru-f4a5a.firebaseapp.com",
    projectId: "cooking-guru-f4a5a",
    storageBucket: "cooking-guru-f4a5a.appspot.com",
    messagingSenderId: "905959817487",
    appId: "1:905959817487:web:2ff6bc1a511e680d1f7e7a",
    measurementId: "G-LTYP2HSPW0"
  };


  // initialize app
firebase.initializeApp(firebaseConfig);

//initialize services

const projectFireStore = firebase.firestore();
export {projectFireStore}