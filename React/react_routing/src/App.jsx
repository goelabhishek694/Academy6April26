import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './poc/Navbar'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './poc/Home'
import About from './poc/About'
import Listing from './poc/Listing'
import NotFound from './poc/NotFound'
import Users from './poc/Users'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/listing' element={<Listing />}></Route>
        {/* template routes */}
        <Route path = "/users/:id/:name/:age" element={<Users isAdmin={true} />}></Route>
        {/* redirecting routes */}
        {/* dynamic route */}
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
