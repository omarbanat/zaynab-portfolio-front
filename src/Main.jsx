import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
};

export default Main;
