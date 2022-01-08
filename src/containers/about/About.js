import React from 'react'
import './about.css';
import { Feature } from '../../components';

const About = () => {
  return (
    <section className='about section__margin'>
      <div className='about__description'>
        <Feature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className='about__caption gradient__text'>
        <h2>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
      </div>
      <div className='about__offers'>
        <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
        <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
      </div>
    </section>
  )
}

export default About
