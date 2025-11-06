import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className='font-sans overflow-x-hidden'>
      <Navbar />
      <Banner />
      <About />
    </div>
  )
}

export default App