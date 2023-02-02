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
        <div class="social-container">

            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />

        </div>
    );
}