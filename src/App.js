import './App.css';
import React from 'react';
import Services from './components/Services';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';



function App() {
  return( 
    <>
    <div>
    <Services/>
    </div>
    <div>
    <Skills/>
    </div>
    <div>
    <ContactMe/>
    </div>
    </>
  )
}

export default App;
