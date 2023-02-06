import './App.css';
import Navbar from './components/Navbar';
// import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import React from 'react';
import Footer from './components/Footer';
import Oneprojectpage from './components/Oneprojectpage/Oneprojectpage'

function App() {
 return(
  <div className='App'>
   <Oneprojectpage/>
  
  </div>
 )
  
}

export default App;


 /* <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes> */