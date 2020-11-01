import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtj0AZFAYKuLOQ3e39Xg1aRCL-ba4OEUE",
  authDomain: "manchester-city-e601a.firebaseapp.com",
  databaseURL: "https://manchester-city-e601a.firebaseio.com",
  projectId: "manchester-city-e601a",
  storageBucket: "manchester-city-e601a.appspot.com",
  messagingSenderId: "595286608982",
  appId: "1:595286608982:web:76dae23a95ba93c334fff7",
  measurementId: "G-Q4M50L2LWE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

// firebaseDB
//   .ref("matches")
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });

const firebasematches = firebaseDB.ref("matches");
export { firebase, firebasematches };
