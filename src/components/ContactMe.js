import React from "react";
import './ContactMe.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";



const ContactMe = () => {
    return (
        <div className="contact-me">
            <div className="left">
                <div className="contact-name">Zaynab Abdl<br /> Nabi</div>
                <div className="social-icon">
                    <div className="facebook-icon">
                        <FontAwesomeIcon icon={faFacebook} size="3x" color='grey' />
                    </div>
                    <div lassName="LinkedIn-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} size="3x" color='grey' />
                    </div>
                    <div lassName="twitter-icon">
                        <FontAwesomeIcon icon={faTwitter} size="3x" color='grey' />
                    </div>
                    <div lassName="instagram-icon">
                        <FontAwesomeIcon icon={faInstagram} size="3x" color='grey' />
                    </div>
                </div>
                <div className="left-buttom">
                    <div className="personal-contact">
                        <div className="personal-contact">My personal contact </div>
                        <div className="phone-number">+961 81 286</div>
                    </div>
                    <div className="contact-email">
                        <div className="hello-message">Say hello, on email</div>
                        <div className="user-email">zaynab.abdelnabi@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="contact-title">Contact<br />Me.</div>
                <div className="questions-part">
                    <div className="name-question">What is your name ?*</div>
                    <div className="email-question">What is your email?*</div>
                    <div className="message">Write your message here*</div>
                    <div className="sendbtn"> <button>Send</button></div>
                </div>

            </div>
        </div>
    )
}
export default ContactMe;