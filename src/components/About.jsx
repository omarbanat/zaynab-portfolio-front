import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
// import { Routes,Route } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const About = () => {
 const API_URL = process.env.REACT_APP_API_URL;
 const [aboutDescription, setaboutDescription] = useState();
 // const [aboutData,setAbout]=useState([])


 const fetchAboutInformation = async () => {
   await axios
     .get(`${API_URL}/infos/getAllInformation`)
     .then((response) => setaboutDescription(response.data.data.filter(response=>response.type=='about')));
  console.log(aboutDescription)
 };


 useEffect(() => {
   fetchAboutInformation();
   
}, []);






 return (


  
   <div>
     {aboutDescription && aboutDescription.map((x)=>{
     return(
     <div className="aboutme" id="about" key={x.id}>
       <div className="aboutme-title">
         <h1>About Me</h1>
       </div>
       <div>
         <p>{x.fullDescription}</p>
       </div>
       <div>
         <Link
           to="skills"
           spy={true}
           smooth={true}
           offset={-50}
           duration={2000}
         >
           <button className="about-btn">My Skills</button>
         </Link>
       </div>
     </div>
     )})}


   </div>
 );
};
export default About;



