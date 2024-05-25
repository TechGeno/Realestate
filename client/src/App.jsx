import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Singup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import List from './pages/List';
import Navbar from './components/Navbar';
import CreateList from './pages/Createlist';
import Search from './pages/Search';
import UpdateList from './pages/UpdateList';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Singup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/list/:listId" element={<List />}/>
      <Route  element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/createlist" element={<CreateList />}/>
        <Route path="/updatelist/:listid" element={<UpdateList />}/>
      </Route>
    </Routes>
    </BrowserRouter> 
  )
  
}
