import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import React from 'react';
import Footer from './components/Footer';

function App() {
 return(
  <div className='App'>
   
  
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
    
  
    <Services/>
    <Skills/>
    <Footer/>
  </div>
 )
  
}

export default App;
