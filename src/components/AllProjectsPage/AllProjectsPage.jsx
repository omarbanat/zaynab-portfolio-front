import React from 'react'
import './AllProjectsPage.css'
import REALLDEMO from '../RealProjectTwo/images/myDoctorProject.png'
import REALDEMO from '../Projects/images/CoverProjectOneRD.png';
import Footer from '../Footer';
import Navbar from '../Navbar';
import PORTfolio from '../Projects/images/portfolioAP.png';
import { Link } from 'react-router-dom';

function AllProjectsPage() {
  return (
    <div>
        <Navbar />
        <h1 className='ProjectstitleL'>Projects</h1>
      <div className='ProjectsMainCenter' id='allProjectsPage'>
        
        <div className='projectscenter' id="columnsection">
            <div className='tripletprojects' >
                <div class="mydivouterp">
                <img className="sourap" src={REALDEMO} alt="firstimage"/>
                
                </div>
                <p className="projectstitleheader"><b>Financial App with Mobile App</b></p>
                <p className="projectsdateheader">April 2022</p>
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={REALLDEMO} alt="firstimage"/>
               
                </div>
                <p className="projectstitleheader"><b>My Doctor</b></p>
                <p className="projectsdateheader">Published Date</p>

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={PORTfolio} alt="firstimage"/>
                
                </div>
                <p className="projectstitleheader"><b>Portfolio With Dashboard</b></p>
                <p className="projectsdateheader">February 2022</p>
            </div>
            </div>
            <div className='projectscenter' >
            <div className='tripletprojects' id="description-one">
                <div class="mydivouterp">
                    <p>  <ul> 
                <li>One centralized application that manages the finances of a company (expenses, incomes).</li>
                <li>Built using React Js for the frontend and Laravel for the backend with MySQL as database.</li>
                <li>Mobile app also provided using react native.</li>
              </ul></p>
                </div>
                
 
            </div>
            <div className='tripletprojects' id="description-two">
            <div class="mydivouterp">
                <p> Mobile application to connect doctors and patients that build using React, React Native and expo. In addition to using JavaScript, Express for the backend with postgreSQL database.</p>
                </div>
                

            </div>
            <div className='tripletprojects' id="description-three">
            <div class="mydivouterp">
                <p className="discription"> Built by MERN stack, React Js for the frontend and Node Js for the backend with MongoDB
                 as database .</p>
                </div>
               
            </div>
            </div>



        
         </div>
        
       <Footer/>
   
    </div>
    
  )
}

export default AllProjectsPage
