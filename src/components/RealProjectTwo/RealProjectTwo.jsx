import React from 'react';
import { BiPurchaseTag } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { RiLinkM } from 'react-icons/ri';
import REALLDOME from './images/myDoctorProject.png';
import Navbar from '../Navbar';
import Footer from '../Footer';

function RealProjectTwo() {
  return (
    <div>
      <Navbar />
      <h1 className="Tprjitle">Projects</h1>

      <div className="OneprojectPage">
        <div className="AProjectContent">
          <div className="imagesofproject">
            <img src={REALLDOME} alt="ProjectImage" className="ProjImj" />
          </div>
        </div>
        <div className="paragraphofproject">
          <div className="dateofprj">
            <p>
              <MdDateRange />
              27-05-2022
            </p>
          </div>

          <h2 className="ProjectNameprj">My-Doctor</h2>
          <div className="descriptionofaproject">
            <p>
              <BiPurchaseTag />
              React, JavaScript, Html,NodeJs, MongoDB
            </p>
          </div>

          <p className="paragprj">
          
          mobile application to connect doctors and patients that build using React, React Native and expo. In addition to using JavaScript, Express for the backend with postgreSQL database
          </p>
          <div className="buttonsPRJ">
            <a href="https://www.youtube.com/@zaynababdelnabi6446" target="_blank"><button type="button" className="showLINKPrjbtn">
              <RiLinkM className="gitLINKreactICON" />
            </button></a>
            <a href="https://github.com/zaynab-abdelnabi" target="_blank"><button type="button" className="showLINKPrjbtn">
              <BsGithub className="gitLINKreactICON" />
            </button></a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RealProjectTwo;
