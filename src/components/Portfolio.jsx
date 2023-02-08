
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects/Projectss";
import Blogss from "./Blogs/Blogss";
 import ContactMe from "./ContactMe";

const Portfolio= () =>{

    return(
        <div >
            
      <Navbar/>
      <Home/>
      <About />
      <Services />
      <Experiences />
      <Skills />
      <Projects/>
      <Blogss/>
      <ContactMe/>
      <Footer />
        </div>
    )
}


export default Portfolio;