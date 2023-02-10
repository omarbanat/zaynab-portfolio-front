import React from 'react'
import './AllProjectsPage.css'
import projectFive from '../Projects/images/projectFIVE.png'
import REALLDEMO from '../RealProjectTwo/images/myDoctorProject.png'
import projectTwo from '../Projects/images/projectTWO.png';
import projectThree from '../Projects/images/projectTHREE.png';
import projectOne from '../Projects/images/projectONE.png';
import REALDEMO from '../Projects/images/CoverProjectOneRD.png';
import projectSix from '../Projects/images/projectSIX.png';
import projectFour from '../Projects/images/poroforo.png';
import Footer from '../Footer';
import Navbar from '../Navbar';
import PORTfolio from '../Projects/images/Portfolio.png';
import { Link } from 'react-router-dom';
function AllProjectsPage() {
  return (
    <div>
        <Navbar />
        <h1 className='ProjectstitleL'>Projects</h1>
      <div className='ProjectsMainCenter' id='allProjectsPage'>
        
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={REALDEMO} alt="firstimage"/>
                <Link to="/projectone"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>Financial App with Mobile App</b></p>
                <p className="projectsdateheader">April 2022</p>
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={REALLDEMO} alt="firstimage"/>
                <Link to="/projecttwo"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>My Doctor</b></p>
                <p className="projectsdateheader">Published Date</p>

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={PORTfolio} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Portfolio Website</b></p>
                <p className="projectsdateheader">March 2021</p>
            </div>
            </div>


        <div className='projectscenter'>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectFour} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>

            <div className='tripletprojects'>
            <div class="mydivouterp"> 
                <img className="sourap" src={projectFive} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Araby Company Website </b></p>
                <p className="projectsdateheader">May 2021</p>
            </div>

            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectSix} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>

        </div>
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={projectOne} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Personal Portfolio </b></p>
                <p className="projectsdateheader">April 2021</p>
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectTwo} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectThree} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>
            </div>
        
        </div>
       <Footer/>
    </div>
    
  )
}

export default AllProjectsPage
