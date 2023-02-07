
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Footer from "./Footer";



const Portfolio= () =>{

    return(
        <div >
            
      <Navbar/>
      <Home/>
      <About />
      <Services />
      <Experiences />
      <Skills />
      <Footer />
        </div>
    )
}


export default Portfolio;