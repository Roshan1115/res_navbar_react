import React, { useState } from 'react'
import './navbar.css'
import { FaFacebookSquare, FaInstagramSquare,FaLinkedinIn } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [showMediaIcon, setMediaIcon] = useState(false)
  return (
    <>
      <nav className="main-nav">
        {/* first div  */}
        <div className="logo">
          <span>RoshanBishi</span>
          {/* <span>Bishi</span> */}
        </div>

        {/* 2nd div  */}
        <div className={showMediaIcon ? "mobile-menu-link" : "menu-link"}>
          <ul>
            <li><a href="#" className="home">Home</a></li>
            <li><a href="#" className="about">About</a></li>
            <li><a href="#" className="services">Services</a></li>
            <li><a href="#" className="contact">Contact</a></li>
          </ul>
        </div>

        {/* 3rd div  */}
        <div className="social-media">
          <ul className="social-media-desktop" >
            <li>
              <a href="#"><FaFacebookSquare className="facebook"/></a>
            </li>
            <li>
              <a href="#"><FaInstagramSquare className="instagram" /></a>
            </li>
            <li>
              <a href="#"><FaLinkedinIn className="linkedin" /></a>
            </li>
          </ul>

          {/* hamburger */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setMediaIcon(!showMediaIcon)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Roshan's site</h1>
      </section>
    </>
  )
}

export default Navbar;
