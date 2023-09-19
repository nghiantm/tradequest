// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW7rd5o-mbgMovc8K8D5md-u-JUeVoCcs",
  authDomain: "stock-simulator-4e59a.firebaseapp.com",
  databaseURL: "https://stock-simulator-4e59a-default-rtdb.firebaseio.com",
  projectId: "stock-simulator-4e59a",
  storageBucket: "stock-simulator-4e59a.appspot.com",
  messagingSenderId: "146299729149",
  appId: "1:146299729149:web:2beee0c7ca18be807f7a94",
  measurementId: "G-N1JL8B9WJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Login function
export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}

export const logout = () => {
    signOut(auth);
}

export const writeTransaction = (userID, transactionData) => {
    const db = getDatabase();
    const ref = ref(db, `users/${userID}/transactions/${transactionData.symbol}`)

    set(ref, {

    })

}