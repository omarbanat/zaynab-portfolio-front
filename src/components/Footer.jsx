import React from "react";
import './Footer.css'
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaAngleDoubleUp} from "react-icons/fa"
import {FaRegEnvelope} from "react-icons/fa";

const Footer =()=>{

    return (
         <div  className="footer-container">

                <div className="footer-back-to-top">
                      <div className="arrow"> <FaAngleDoubleUp/></div>
                      <div className="footer-back-text">BACK TO TOP </div>
                </div>
                <div className="footer-socail-media">
                     <div ><FontAwesomeIcon icon={faFacebook} size="2x" /> </div>
                     <div > <FontAwesomeIcon icon={faInstagram} size="2x" /></div>
                     <div ><FontAwesomeIcon icon={faLinkedin} size="2x" /> </div>
                     <div className="envelope"><FaRegEnvelope/></div>
                </div>
                <div className="footer-copright">@2020 <span>Zaynab Abd El Nabi </span> All Rights Reserved. </div>

         </div>

    )
}

export default Footer;
