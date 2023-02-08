import React from 'react'

import './allBlogsPage.css';
import Footer from '../Footer';
import projectFive from '../Projects/images/projectFIVE.png';
import projectTwo from '../Projects/images/projectTWO.png';
import projectThree from '../Projects/images/projectTHREE.png';
import projectOne from '../Projects/images/projectONE.png';
import projectSix from '../Projects/images/projectSIX.png';
import projectFour from '../Projects/images/poroforo.png';






function allBlogsPage() {
  return (
    <div>
       <div className='BlogstitleL'>
      <h1 className='BLGtlt'>Blogs</h1>
      <div><button type="button" className="homebtnBLG" >home</button></div></div> 
      <div className='ProjectsMainCenter' id='allProjectsPage'>
        
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={projectOne} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectTwo} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectThree} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>
            </div>


        <div className='projectscenter'>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectFour} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>

            <div className='tripletprojects'>
            <div class="mydivouterp"> 
                <img className="sourap" src={projectFive} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>

            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectSix} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>

        </div>
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={projectOne} alt="firstimage"/>
                <button type="button" class="mybuttonoverlapp"><span>Read More</span></button>
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
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
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>
            </div>
        </div>
    <Footer/>
    </div>
  )
}

export default allBlogsPage
