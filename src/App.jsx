import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

function App() {
  const location = useLocation();
  const shouldRenderNavBar = location.pathname !== '/signup' && location.pathname !== '/login';

  return (
    <>
      {shouldRenderNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
