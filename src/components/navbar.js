import React, { useState } from 'react'
import './navbar.css'
import { FaFacebookSquare, FaInstagramSquare,FaLinkedinIn } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const [showMediaIcon, setMediaIcon] = useState(false)
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
          <span>R</span>oshan
          <span>B</span>ishi
          </h2>
        </div>

        {/* 2nd div  */}
        <div className={showMediaIcon ? "mobile-menu-link" : "menu-link"}>
          <ul>
            <li><NavLink to="/">Home</NavLink> </li>
            <li><NavLink to="/about">About</NavLink> </li>
            <li><NavLink to="/services">Services</NavLink> </li>
            <li><NavLink to="/contact">Contact</NavLink> </li>
          </ul>
        </div>

        {/* 3rd div  */}
        <div className="social-media">
          <ul className="social-media-desktop" >
            <li>
              <a href="https://www.facebook.com/roshan.bishi" rel="noreferrer" target="_blank" ><FaFacebookSquare className="facebook" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/roshan.bishi/" rel="noreferrer" target="_blank" ><FaInstagramSquare className="instagram"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/roshanbishi/" rel="noreferrer" target="_blank" ><FaLinkedinIn className="linkedin"/></a>
            </li>
          </ul>

          {/* hamburger */}
          <div className="hamburger-menu">
            <a herf="#" onClick={() => setMediaIcon(!showMediaIcon)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
