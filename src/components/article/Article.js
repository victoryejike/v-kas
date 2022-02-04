import React from 'react'
import './article.css';
// import Blog1 from '../../assets/blog01.png';

const Article = ({ image }) => {
  return (
    <div className='article'>
      <div className='article__imgContainer'>
        <img src={image} alt='article' />
      </div>
      <div className='article__meta'>
        <div className='article__meta--content'>
          <small>Sep 26, 2021</small>
          <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
        </div>
        <small>Read Full Article</small>
      </div>
    </div>
  )
}

export default Article
//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 access token