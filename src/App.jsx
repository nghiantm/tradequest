import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Account from './components/Account'
import Trading from './components/trading'
import Loading from './components/Loading'

function App() {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const shouldRenderNavBar = location.pathname !== '/signup' && location.pathname !== '/login';

  return loading 
    ? <Loading />
    : (
      <>
        {shouldRenderNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='/account' element={<Account />} />
          <Route path="/trading" element={<Trading />} />
        </Routes>
      </>
    )
}

export default App
