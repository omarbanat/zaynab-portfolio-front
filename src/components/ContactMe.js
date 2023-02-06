import React from "react";
import './ContactMe.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';



const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_y6emhp8' , 'template_qtj5p58' , e.target ,'vWYz7uagj0l_2VpAa' )
    }

    return (
        <>
            <div className="contact-me">
                <div class="left">
                    <div className="contact-name">Zaynab Abd El<br /> Nabi</div>
                    <div className="social-icon">
                        <div className="facebook-icon">
                            <FontAwesomeIcon icon={faFacebook} color='grey' />
                        </div>
                        <div class="LinkedIn-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} color='grey' />
                        </div>
                        <div class="twitter-icon">
                            <FontAwesomeIcon icon={faTwitter} color='grey' />
                        </div>
                        <div class="instagram-icon">
                            <FontAwesomeIcon icon={faInstagram} color='grey' />
                        </div>
                    </div>
                    <div className="left-buttom">
                        <div className="personal-contact">
                            <div className="personal-contact">My personal contact </div>
                            <div className="phone-number">+961 81 286 345</div>
                        </div>
                        <div className="contact-email">
                            <div className="hello-message">Say hello, on email</div>
                            <div className="user-email">zaynab.abdelnabi@gmail.com</div>
                        </div>
                    </div>
                </div>




                <div className="right-container">
                    <div className="midlle-content">Contact<br /> me</div>

                    <form class="right" onSubmit={sendEmail}>
                        <input type="text" id="name-question" name="text" placeholder="What is your name ?" />
                        <input type="email" id="email-question" name="text" placeholder="What is your Email ?" />
                        <textarea type="text" id="writing-message" name="text" placeholder="Write a message" />
                        <button class="send-btn" type="submit"><div class="text-btn" >Send</div></button>
                    </form>

                </div>
            </div>
            <div className="query-style">

                <div className="title-query"> GET IN TOUCH</div>

                <div className="form-query">
                    <form className="form-query">

                        <div className="email-query">
                            <label for="email">Your Email Address</label>
                            <input type="email" id="email-question-query" name="text" placeholder="something@website.com" />
                        </div>

                        <div className="subject-query">
                            <label for="text">Subject</label>
                            <input type="text" id="subject-question-query" name="text" placeholder="Question about your article" />

                        </div>

                        <div className="message-query">
                            <textarea type="text" id="writing-message" name="text" placeholder="Your message starts with..." />
                        </div>

                        <div className="btn-query">
                            <button class="send-btn-query" type="submit"><div class="text-btn-query" >Send</div></button>
                        </div>

                    </form>

                </div>

            </div>

        </>
    )

}
export default ContactMe;