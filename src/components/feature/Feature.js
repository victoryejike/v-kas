import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='feature'>
      <div className='feature__title'>
        <div></div>
        <h3>{title}</h3>
      </div>
      <div className='feature__description'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
