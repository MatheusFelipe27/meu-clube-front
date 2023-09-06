import React from 'react'
import './Navbar.scss'
import logo from './../../assets/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className='nav'>
            <div className='navLeft'>
              <img className='navLeftLogo' src={logo} alt='logo'/>
              <span> FC Matheus</span>
            </div>
            <div className='navRight'>
              <span> Inicio</span>
              <span> Departamentos</span>
            </div>
        </nav>
    </>
  )
}

export default Navbar