import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './firebase'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Account from './components/Account'
import Trading from './components/Trading/Trading'
import Loading from './components/Loading'
import InitAccount from './components/InitAccount'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { setBalance, setOrderHistory, setTradesMade } from './actions/account'
import Portfolio from './components/Portfolio/Portfolio'

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
      dispatch(setBalance(docSnap.data().balance));
    })

    const userTransactionDocRef = doc(db, "transactions", user.uid);
    const transactionHistoryCollectionRef = collection(userTransactionDocRef, "history");
    onSnapshot(transactionHistoryCollectionRef, docSnap => {
      if (docSnap) {
        const orderHistory = {};
        let tradesMade = 0;
        docSnap.forEach((doc) => {
          const data = doc.data();
          tradesMade += 1;
          const { symbol, shares, price } = data;

          if (orderHistory[symbol]) {
            orderHistory[symbol].shares += shares;
            orderHistory[symbol].totalCost += shares*price;
          } else {
            orderHistory[symbol] = {
              shares: shares,
              totalCost: shares*price
            };
          };
        })
      
        const filteredOrderHistory = {};
        for (const symbol in orderHistory) {
          if (orderHistory[symbol].shares > 0) {
            filteredOrderHistory[symbol] = orderHistory[symbol];
          };
        };

        dispatch(setOrderHistory(filteredOrderHistory));
        dispatch(setTradesMade(tradesMade));
      }
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
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </>
    )
}

export default App
