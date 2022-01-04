import React from 'react'
import "./styles.css";

import { Header, Footer, Blog, Features, Possibility, WhatGPT3 } from './containers';
import { Brand, CTA, Navbar, } from './components';

export default function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
