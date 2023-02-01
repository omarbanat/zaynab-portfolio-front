import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
import SocialFollow from "./SocialFollow"
import "./SocialFollow.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar =() =>{

    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return(

    <nav className="navigation">

    <p className="site-title"> ZAYNAB <span>ABD AL NABI</span></p>

    <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><FaBars/></button>
        
    <div
        className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
    <ul>
        <li>
            <Link to="/"><strong>Home</strong> </Link>
        </li>
        <li div="about">
            <Link to="/about">About</Link>
        </li>
        <li div="experience">
            <Link to="/experience">Experience</Link>
        </li>
        <li div="projects">
            <Link to="/projects">Projects</Link>
        </li>
        <li div="contacts">
            <Link to="/contacts">Contacts</Link>
        </li>
        <li div="blogs">
            <Link to="/blogs">BLogs</Link>
        </li>
    </ul>
    </div>
   <div className="socailfollow"><SocialFollow /></div> 
  </nav>
)
}

export default Navbar;

