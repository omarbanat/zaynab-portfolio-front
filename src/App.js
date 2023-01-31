import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills'
import React from 'react';


function App() {
 return(
  <div className='App'>
   
  
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    
    <Services/>
    <Skills/>
    
    
  </div>
 )
  
}

export default App;
