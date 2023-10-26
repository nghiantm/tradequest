// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    addDoc,
    updateDoc
} from "firebase/firestore"
import { async } from "@firebase/util";
import { useSelector } from "react-redux";
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
export const auth = getAuth(app);
export const db = getFirestore(app);

// Login function
export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await setDoc(doc(collection(db, "transactions"), user.uid), {
        });
        await setDoc(doc(collection(db, "users"), user.uid), {
            authProvider: "local",
            balance: 200000,
        })
    } catch (e) {
        console.log(e);
        alert(e.message);
    }
}

export const logout = () => {
    signOut(auth);
}
/*
export const writeTransaction = (userID, transactionData) => {
    const db = getDatabase();
    const ref = ref(db, `users/${userID}/transactions/${transactionData.symbol}`)

    set(ref, {

    })

}
*/

export const writeTransaction = async (userID, balance, symbol, shares, price) => {
    const transactionUserDocRef = doc(db, "transactions", userID);
    const symbolCollectionRef = collection(transactionUserDocRef, symbol);

    const userDocRef = doc(db, "users", userID);

    try {
        //add transaction
        await addDoc(symbolCollectionRef, {
            shares: shares,
            price: price,
            cost: shares*price,
            date: new Date(),
        })
        //update balance
        await updateDoc(userDocRef, {
            balance: balance - (shares*price),
        })  
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}