import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Singup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/signup" element={<Singup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
  )
  
}
