import React from 'react'
import './blog.css'
import { Article } from '../../components'
import Blog1 from '../../assets/blog01.png';
import Blog2 from '../../assets/blog02.png';
import Blog3 from '../../assets/blog03.png';
import Blog4 from '../../assets/blog04.png';
import Blog5 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <section className='blog section__padding'>
      <h2 className='blog__maintext gradient__text'>A lot is happening,<br/> We are blogging about it.</h2>
      <div className='blog__articles'>
        <div className='blog__articles-left'>
          <Article image={Blog1}/>
        </div>
        <div className='blog__articles-right'>
          <Article image={Blog2}/>
          <Article image={Blog3}/>
          <Article image={Blog4}/>
          <Article image={Blog5}/>
        </div>
      </div>
    </section>
  )
}

export default Blog
