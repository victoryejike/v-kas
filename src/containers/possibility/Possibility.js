import React from 'react'
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <section className='possibility section__padding' id='possibility'>
      <div className='possibility__img-container'>
        <img src={PossibilityImage} alt='possibility' />
      </div>
      <div className='possibility__content'>
        <p className='possibility__content--header'>Request Early Access to Get Started</p>
        <h3 className='possibility__content--maintext gradient__text'>The possibilities are beyond your imagination</h3>
        <p className='possibility__content--subtext'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='possibility__content--footer'>Request Early Access to Get Started</p>
      </div>
    </section>
  )
}

export default Possibility
