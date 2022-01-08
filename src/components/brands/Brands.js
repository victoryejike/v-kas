import React from 'react'
import './brands.css'
import Google from '../../assets/google.png';
import Slack from '../../assets/slack.png';
import Shopify from '../../assets/shopify.png'
import Dropbox from '../../assets/dropbox.png';
import Atlassian from '../../assets/atlassian.png'

const Brands = () => {
  return (
    <div className='brands section__padding'>
      <div>
        <img src={Google} alt='partners' />
      </div>
      <div>
        <img src={Slack} alt='partners' />
      </div>
      <div>
        <img src={Atlassian} alt='partners' />
      </div>
      <div>
        <img src={Dropbox} alt='partners' />
      </div>
      <div>
        <img src={Shopify} alt='partners' />
      </div>
    </div>
  )
}

export default Brands
