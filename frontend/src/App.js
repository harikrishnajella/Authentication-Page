import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)

export default App