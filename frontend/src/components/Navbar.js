import React from 'react'
import Cookies from 'js-cookie'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handlerLogout = () => {
      console.log("logout")
        Cookies.remove('jwtToken')
        navigate('/login')
    }
     
  return (
    <nav className='navbar-container'>
        <div className='navbar-card'>
            <button className='navbar-btn' type='button' onClick={handlerLogout}>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar