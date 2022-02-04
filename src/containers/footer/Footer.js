import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <section className='footer section__padding'>
      <div className='footer__heading gradient__text'>
        Do you want to step in to the future before others
      </div>
      <button className='footer__btn'>Request Early Access</button>
      <div className='footer__links'>
        <div className='footer__links-navlink'>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <small>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</small>
        </div>
        <div className='footer__links-navlink1'>
          <h5>Links</h5>
          <p><a href='/#'>Overons</a></p>
          <p><a href='/#'>Social Media</a></p>
          <p><a href='/#'>Counters</a></p>
          <p><a href='/#'>Contact</a></p>
        </div>
        <div className='footer__links-navlink1'>
          <h5>Company</h5>
          <p><a href='/#'>Terms & Conditions</a></p>
          <p><a href='/#'>Privacy Policy</a></p>
          <p><a href='/#'>Contact</a></p>
        </div>
        <div className='footer__links-navlink1'>
          <h5>Get in touch</h5>
          <p><a href='/#'>Crechterwoord K12 182 DK Alknjkcb</a></p>
          <p><a href='/#'>085-132567</a></p>
          <p><a href='/#'>info@payme.net</a></p>
        </div>
      </div>
      <small>© 2022 GPT-3. All rights reserved.</small>
    </section>
  )
}

export default Footer
