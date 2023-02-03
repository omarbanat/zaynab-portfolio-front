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

            <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.facebook.com/omarbanat22?mibextid=LQQJ4d" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank">  <FontAwesomeIcon icon={faTwitter} size="2x"/></a>
            <a href="https://www.instagram.com/invites/contact/?i=1uph79k5ib5ka&utm_content=bfs9lv" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="2x" /></a>

        </div>
    );
}