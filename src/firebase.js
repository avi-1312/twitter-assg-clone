import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB8UxU982AJYhYeFwWzcRL_EFr-U3Wvbw",
  authDomain: "twitter-assignment-33538.firebaseapp.com",
  projectId: "twitter-assignment-33538",
  storageBucket: "twitter-assignment-33538.appspot.com",
  messagingSenderId: "923664197724",
  appId: "1:923664197724:web:365b7c28d3e74eb4ca9e99",
  measurementId: "G-GYSC0WD16G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;