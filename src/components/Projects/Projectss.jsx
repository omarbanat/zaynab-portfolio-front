import React from 'react';
import "./Projectss.css";
import ProjectOne from '../Projects/images/CoverProjectOneRD.png';
import ProjectTwO from '../RealProjectTwo/images/myDoctorProject.png';

import projectThree from './images/projectTHREE.png';
import projectFive from './images/projectFIVE.png';
import projectSix from './images/projectSIX.png';
import projectFour from './images/poroforo.png';
import PORTfolio from './images/Portfolio.png';
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <div id="projects">
     

      <div className="wholeprojectssection">
        
        
        
        <div className='projectstitlediv'>
           <h2 className='Projectsmaintitleheader'>Latest Work</h2>
        </div>
        
        
        <div className='ProjectsMainCenter'>
        
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={ProjectOne} alt="firstimage"/>
                <Link to="/projectone"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>Financial App with Mobile App</b></p>
                <p className="projectsdateheader">April 2022</p>
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={ProjectTwO} alt="firstimage"/>
                <Link to="/projecttwo"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>My Doctor</b></p>
                <p className="projectsdateheader">May 2021</p>

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={PORTfolio} alt="firstimage"/>
                <Link to="/projectid"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>Portfolio Website</b></p>
                <p className="projectsdateheader">March 2021</p>
            </div>
            </div>


        <div className='projectscenter'>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectFour} alt="firstimage"/>
                <Link to="/projectid"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>Araby Company Website</b></p>
                <p className="projectsdateheader">May 2021</p>
            </div>

            <div className='tripletprojects'>
            <div class="mydivouterp"> 
                <img className="sourap" src={projectFive} alt="firstimage"/>
                <Link to="/projectid"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>Personal Portfolio</b></p>
                <p className="projectsdateheader">April 2021</p>
            </div>

            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectSix} alt="firstimage"/>
                <Link to="/projectid"><button type="button" class="mybuttonoverlapp"><span>Read More</span></button></Link>
                </div>
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>

        </div>
        
        </div>
        
        
        
        <div className='projectsbuttondiv'>
        <Link to="/projects"><button type="button" className="showMoreProjectButton">Show More</button></Link>
        </div>





      </div>

    </div>
  )
}

export default Projects;
