import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './firebase'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Account from './components/Account'
import Trading from './components/Trading'
import Loading from './components/Loading'
import InitAccount from './components/InitAccount'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setBalance } from './actions/account'

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const shouldRenderNavBar = 
    location.pathname !== '/signup' 
    && location.pathname !== '/login'
    && location.pathname !== '/signup/getstarted'

  if (user && user.uid) {
    //users collection ref
    const userDocRef = doc(db, "users", user.uid);
    //real time data collection
    onSnapshot(userDocRef, docSnap => {
        console.log("CURRENT USER", docSnap.data());
        dispatch(setBalance(docSnap.data().balance));
      })
  }

  return loading 
    ? <Loading />
    : (
      <>
        {shouldRenderNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/getstarted" element={<InitAccount />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='/account' element={<Account />} />
          <Route path="/trading" element={<Trading />} />
        </Routes>
      </>
    )
}

export default App
