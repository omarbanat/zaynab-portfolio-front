import React from "react";
import "./About.css"
// import { Routes,Route } from "react-router-dom";
const About = () =>{
    return(<div>
    <div className="aboutme">
        <div className="aboutme-title"><h1>About Me</h1></div>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin volutpat lorem in viverra. Donec in maximus orci. Etiam quis neque pellentesque, bibendum nulla eu, iaculis erat. Mauris dui nibh, rhoncus ut laoreet nec, dapibus et dui. Aenean ac orci id magna finibus sodales vel ut eros. Aenean finibus ornare congue. Proin et orci non est suscipit faucibus ullamcorper at augue. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin volutpat lorem in viverra. Donec in maximus orci. Etiam quis neque pellentesque, bibendum nulla eu, iaculis erat. Mauris dui nibh, rhoncus ut laoreet nec, dapibus et dui. Aenean ac orci id magna finibus sodales vel ut eros. Aenean finibus ornare congue. Proin et orci non est suscipit faucibus ullamcorper at augue.</p></div>
       <div><button className="about-btn">My Skills</button></div> 
        </div>
        {/* <Routes>
      <Route path="/about" element={<About></About>}></Route>
    </Routes> */}
        </div>
    )
}
 export default About;