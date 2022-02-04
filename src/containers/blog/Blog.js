import React from 'react'
import './blog.css'
import { Article } from '../../components'

const Blog = () => {
  return (
    <section className='blog section__padding'>
      <h2 className='blog__maintext gradient__text'>A lot is happening,<br/> We are blogging about it.</h2>
      <div className='blog__articles'>
        <div className='blog__articles-left'>
          <Article />
        </div>
        <div className='blog__articles-right'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  )
}

export default Blog
