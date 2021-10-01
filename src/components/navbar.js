import React from 'react'
import './navbar.css'
import { FaFacebookSquare, FaInstagramSquare,FaLinkedinIn } from 'react-icons/fa';

const navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <span>R</span>oshan
          <span>B</span>ishi
        </div>
        <div className="menu">
          <ul>
            <li><a href="#" className="home">Home</a></li>
            <li><a href="#" className="about">About</a></li>
            <li><a href="#" className="services">Services</a></li>
            <li><a href="#" className="contact">Contact</a></li>
          </ul>
        </div>
        <div className="socialmedia">
          <ul>
            <li>
              <a href="#"><FaFacebookSquare className="facebook"/></a>
            </li>
            <li>
              <a href="#"><FaInstagramSquare className="insta" /></a>
            </li>
            <li>
              <a href="#"><FaLinkedinIn className="linkedin" /></a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero-sec">
        <p>Welcome to</p>
        <h1>Roshan's site</h1>
      </section>
    </>
  )
}

export default navbar;
