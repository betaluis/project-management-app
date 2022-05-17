
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyADD5QPlxfF8SJhyxEji_pgiERuQ2DTztg",
    authDomain: "project-management-625.firebaseapp.com",
    projectId: "project-management-625",
    storageBucket: "project-management-625.appspot.com",
    messagingSenderId: "513051335132",
    appId: "1:513051335132:web:d841c75073112edd1e9719"
  };

// Initialize
firebase.initializeApp(firebaseConfig);

// Initialize Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp }