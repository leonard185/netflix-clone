import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import {  Route, Routes } from 'react-router-dom'

import Login from './pages/Loginpage'
  const App =() =>{  

  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      
    </Routes>

  </div>
  )
}

export default App
