import React from "react";
import "./Services.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHtml5} from "@fortawesome/free-brands-svg-icons";
// import Design from "../images/design.png";
// import Maintenance from "../images/maintenance.png";
// import Development from "../images/development.png";
import { MdDesignServices} from "react-icons/md";
import { FaWrench} from "react-icons/fa";
import { AiOutlineLaptop} from "react-icons/ai";
const Services = () => {
  return (
    <div className="services-container">
      <div className="myServices">My Services</div>

      <div className="services">
        <div className="design">
          <div className="service-icon">
            {/* <img className="designimage"src={Design} alt="design icon" /> */}
            <MdDesignServices/>
          </div>
          <div className="service-name">DESIGN</div>
          <div className="service-description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
        <div className="development">
          <div className="service-icon">
            {/* <img className="developmentimage" src={Development} alt="development" /> */}
            <FaWrench/>
          </div>
          <div className="service-name">DEVELOPMENT</div>
          <div className="service-description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
        <div className="maintenance">
          <div className="service-icon">
            {/* <img className="maintenance-img" src={Maintenance} alt="Maintenance" /> */}
            <AiOutlineLaptop/>
          </div>
          <div className="service-name">MAINTENANCE</div>
          <div className="service-description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Services;


// MdDesignServices

// HiWrenchScrewdriver

// AiOutlineLaptop
