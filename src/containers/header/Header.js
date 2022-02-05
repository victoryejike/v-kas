import React from 'react'
import './header.css'
import People from '../../assets/people.png';
import Hero from '../../assets/ai.png';

const Header = () => {
  return (
    <header className='header section__padding'>
      <div className='header__hero-info'>
        <h1 className='header__maintext gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p className='header__subtext'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='header__cta'>
          <input type='email' placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className='header__request-info'>
          <img src={People} alt='users' />
          <small>1,600 people requested access a visit in last 24 hours</small>
        </div>
      </div>
      <div className='header__hero-image'>
        <img src={Hero} alt='HEro' />
      </div>
    </header>
  )
}

export default Header
