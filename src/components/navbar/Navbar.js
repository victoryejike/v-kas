import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar section__padding'>
      <div className='navbar__logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar__links-container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#about'>What is GPT?</a></p>
        <p><a href='#home'>Open AI</a></p>
        <p><a href='#home'>Case Studies</a></p>
        <p><a href='#home'>Library</a></p>
      </div>
      <div className='navbar__cta'>
        <p><a href='#home'>Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar
