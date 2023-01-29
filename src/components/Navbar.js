import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
import SocialFollow from "./SocialFollow"
import "./SocialFollow.css"

const Navbar =() =>{

    return(
    <nav className="nav">
    <p className="site-title"> ZAYNAB ABD AL NABI</p>
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
    <SocialFollow />
  </nav>
)
}

export default Navbar;

