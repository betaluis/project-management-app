import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyADD5QPlxfF8SJhyxEji_pgiERuQ2DTztg",
  authDomain: "project-management-625.firebaseapp.com",
  projectId: "project-management-625",
  storageBucket: "project-management-625.appspot.com",
  messagingSenderId: "513051335132",
  appId: "1:513051335132:web:d841c75073112edd1e9719"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth }

