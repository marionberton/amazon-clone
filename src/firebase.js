import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyARFHySoj5em-kuF7CzQdVRPIeEOknyUqs",
  authDomain: "clone-b919f.firebaseapp.com",
  databaseURL: "https://clone-b919f.firebaseio.com",
  projectId: "clone-b919f",
  storageBucket: "clone-b919f.appspot.com",
  messagingSenderId: "116039451944",
  appId: "1:116039451944:web:e78f9ba2c4ee76df1d7c1d",
  measurementId: "G-12WM6X7ZRW",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};