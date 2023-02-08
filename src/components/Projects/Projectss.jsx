import React from 'react';
import "./Projectss.css";
import projectOne from './images/projectONE.png';
import projectTwo from './images/projectTWO.png';
import projectThree from './images/projectTHREE.png';
import projectFive from './images/projectFIVE.png';
import projectSix from './images/projectSIX.png';
import projectFour from './images/poroforo.png';



function Projects() {
  return (
    <div>
     

      <div className="wholeprojectssection">
        
        
        
        <div className='projectstitlediv'>
           <h2 className='Projectsmaintitleheader'>Latest Work</h2>
        </div>
        
        
        <div className='ProjectsMainCenter'>
        
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
        
        </div>
        
        
        
        <div className='projectsbuttondiv'>
        <button type="button" className="showMoreProjectButton">Show More</button>
        </div>





      </div>

    </div>
  )
}

export default Projects
