import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import logo from './../../assets/logo.png'

const Navbar = () => {
  const [navbarFixed,setNavbarFixed] = useState<boolean>(false)

  const updateNavbarPosition = () => {
      window.scrollY > 0 ? setNavbarFixed(true) : setNavbarFixed(false);
  };

  useEffect(()=>{
      window.addEventListener("scroll", updateNavbarPosition);
      return () => {
        window.removeEventListener("scroll", updateNavbarPosition);
      };
  },[])
  return (
    <>
        <nav className='nav'>
            <div className='navLeft'>
              <img className='navLeftLogo' src={logo} alt='logo'/>
              <span id={navbarFixed? 'teamNameFixed' : 'teamName'}> FC Matheus</span>
            </div>
            <div className='navRight'>
              <a href='#homeInitial' id={navbarFixed? 'sectionsNameFixed' : 'sectionsName'}> Inicio</a>
              <a href='#homeDepartments' id={navbarFixed? 'sectionsNameFixed' : 'sectionsName'}> Departamentos</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar