import React from "react";
import "./Services.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import Design from "../images/design.png";
import Maintenance from "../images/maintenance.png";
import Development from "../images/development.png";
const Services = () => {
  return (
    <div className="services-container">
      <div className="myServices">My Services</div>

      <div className="services">
        <div className="design">
          <div className="service-icon">
            <img className="designimage"src={Design} alt="design icon" />
          </div>
          <div className="service-name">DESIGN</div>
          <div className="service-description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
        <div className="development">
          <div className="service-icon">
            <img className="developmentimage" src={Development} alt="development" />
          </div>
          <div className="service-name">DEVELOPMENT</div>
          <div className="service-description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
        <div className="maintenance">
          <div className="service-icon">
            <img className="thirdimg" src={Maintenance} alt="Maintenance" />
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
