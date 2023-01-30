import React from "react";
import "./Services.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import Design from "../images/design.png";
import Maintenance from "../images/maintenance.png";
import Development from "../images/development.png";
const Services = () => {
  return (
    <div className="container">
      <div className="myServices">My Services</div>

      <div className="services">
        <div className="design">
          <div className="icon">
            <img src={Design} alt="design icon" />
          </div>
          <div className="name">DESIGN</div>
          <div className="description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
        <div className="development">
          <div className="icon">
            <img src={Development} alt="development" />
          </div>
          <div className="name">DEVELOPMENT</div>
          <div className="description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
        <div className="maintenance">
          <div className="icon">
            <img className="thirdimg" src={Maintenance} alt="Maintenance" />
          </div>
          <div className="name">MAINTENANCE</div>
          <div className="description">
            I can design the site based on your needs and suggestions, I can
            also design the site from scratch and consult you during the job
          </div>
        </div>
      </div>
      <div className="square">
        <span class="dot"></span>
        
      </div>
    </div>
  );
};

export default Services;
