import React from "react";
import './Footer.css'
import {
    faLinkedin,
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaAngleDoubleUp} from "react-icons/fa"
import {FaRegEnvelope} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer =()=>{

    const OnClickHandler =()=>{
        scroll.scrollToTop(); 
    }
    return (
         <div  className="footer-container">

                <div className="footer-back-to-top">
                      <div className="arrow" onClick={OnClickHandler}> <FaAngleDoubleUp/></div>
                      <div className="footer-back-text"  onClick={OnClickHandler}>BACK TO TOP </div>
                </div>
                <div className="footer-socail-media">
                     <div> <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /> </a></div>
                     <div>  <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
                     <div> <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /> </a></div>
                     <div className="envelope"> <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank"><FaRegEnvelope/></a></div>
                </div>
                <div className="footer-copright">@2020 <span>Zaynab Abd El Nabi </span> All Rights Reserved. </div>

         </div>

    )
}

export default Footer;
