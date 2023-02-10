import React from 'react';
import { BiPurchaseTag} from 'react-icons/bi';
import {MdDateRange} from 'react-icons/md';
import {BsGithub} from 'react-icons/bs';
import {RiLinkM} from 'react-icons/ri';
import RealDemo from  '../RealProjectOne/Images/ProjectRealOne.png';
import Navbar from '../Navbar';
import Footer from '../Footer';



function RealProjectOne() {
  return (
    <div>
        <Navbar />
      <h1 className='Tprjitle'>Projects</h1>
          
          
          
          <div className='OneprojectPage'>
           
            <div className='AProjectContent'>
                <div className='imagesofproject'>
                    <img src={RealDemo} alt='ProjectImage' className='ProjImj'/>
                </div>
            </div>
            <div className='paragraphofproject'>
              <div className='dateofprj'><p><MdDateRange/>April 2022</p></div>

              <h2 className='ProjectNameprj'>Financial App with Mobile App</h2>
              <div className='descriptionofaproject'><p><BiPurchaseTag/>React, JavaScript, Html,NodeJs, MongoDB</p></div>
                
              <p className='paragprj'> 
               <ul> 
                <li>One centralized application that manages the finances of a company (expenses, incomes).</li>
                <li>Built using React Js for the frontend and Laravel for the backend with MySQL as database.</li>
                <li>Mobile app also provided using react native</li>
              </ul>
              </p>
              <div className='buttonsPRJ'>
              <a href="https://www.youtube.com/watch?v=QtC1vcEDaUE" target="_blank" ><button type="button" className="showLINKPrjbtn"><RiLinkM className="gitLINKreactICON"/></button></a>
            <a href="https://github.com/zaynab-abdelnabi" target="_blank" ><button type="button" className="showLINKPrjbtn"><BsGithub className="gitLINKreactICON"/></button></a>
              </div>

            </div>
          
          </div>
          <Footer />
    </div>
  )
}

export default RealProjectOne
