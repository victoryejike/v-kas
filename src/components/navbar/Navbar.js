import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg';
import { CgMenu } from "react-icons/cg";
import { RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar section__padding'>
      <div className='navbar__logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar__links-container'>
        <Menu />
      </div>
      <div className='navbar__cta'>
        <p><a href='#home'>Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar__mobile-toggle'>
        {
          toggleMenu 
          ? <RiCloseLine onClick={() => setToggleMenu(false)}/> 
          : <CgMenu className='navbar__mobile-menuIcon' onClick={() => setToggleMenu(true)}/>
        }
      </div>
      {
        toggleMenu && (
          <div className='navbar__mobile-navlinks scale-up-center'>
            <Menu />
          </div>
        )
      }
    </nav>
  )
}

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>What is GPT?</a></p>
    <p><a href='#features'>Open AI</a></p>
    <p><a href='#possibility'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

export default Navbar
