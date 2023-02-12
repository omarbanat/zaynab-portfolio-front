import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";



export default function SocialFollow() {
    return (
        <div className="social-container">

            <a href="https://www.facebook.com/zaynab.abdelnabi" target="_blank">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.linkedin.com/in/zaynababdelnabi" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a >  <FontAwesomeIcon icon={faTwitter} size="2x"/></a>
            <a href="https://www.instagram.com/zaynab.abdelnabi/?igshid=YmMyMTA2M2Y=" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="2x" /></a>

        </div>
    );
}