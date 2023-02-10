import React from 'react'
import './AllProjectsPage.css'
import projectFive from '../Projects/images/projectFIVE.png'

import projectTwo from '../Projects/images/projectTWO.png';
import projectThree from '../Projects/images/projectTHREE.png';
import projectOne from '../Projects/images/projectONE.png';
import projectSix from '../Projects/images/projectSIX.png';
import projectFour from '../Projects/images/poroforo.png';
import Footer from '../Footer';
import {useNavigate } from 'react-router-dom';
function AllProjectsPage() {
  return (
    <div id="ALLPROJECTS">
        <h1 className='ProjectstitleL'>Projects</h1>
      <div className='ProjectsMainCenter' id='allProjectsPage'>
        
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={projectOne} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
 
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
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
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
                <p className="projectstitleheader"><b>Project Title</b></p>
                <p className="projectsdateheader">Published Date</p>
 
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
