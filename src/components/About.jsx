import React from "react";
import "./About.css";
import { Link } from "react-scroll";
// import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';


const About = () =>{


  const API_URL = process.env.REACT_APP_API_URL;
  const [aboutDescription, setaboutDescription] = useState([]);

  const fetchAboutInformation = async () => {
    await axios
      .get(`${API_URL}/infos/getAllInformation`)
      .then((response) => setaboutDescription(response.data.data));
    console.log('product', aboutDescription);


  };

  useEffect(() => {
    fetchAboutInformation();
  }, []);


  const aboutData =
    aboutDescription &&
    aboutDescription.find((data) => data.title === 'About Me')
      ? aboutDescription.find((data) => data.title === 'About Me')
      : null;


      console.log( aboutDescription.find((data) => data.title === 'About Me'))
    return(

    <div>
    <div className="aboutme" id="about">
        <div className="aboutme-title"><h1>About Me</h1></div>
        <div><p>{aboutData?.fullDescription}</p></div>
       <div> <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            ><button className="about-btn" >My Skills</button></Link></div> 
        </div>
        {/* <Routes>
      <Route path="/about" element={<About></About>}></Route>
    </Routes> */}
        </div>
    )
}
 export default About;