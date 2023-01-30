import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
import SocialFollow from "./SocialFollow"
import "./SocialFollow.css"
import { Component } from "react";


class Navbar extends Component {

state={clicked:false};
handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
}
render(){
    return(
       
    <nav className="nav">
    <p className="site-title"> ZAYNAB ABD AL NABI</p>
    <ul>
        <li>
            <Link to="/"><strong>Home</strong> </Link>
        </li>
        <li className="about">
            <Link to="/about">About</Link>
        </li>
        <li className="experience">
            <Link to="/experience">Experience</Link>
        </li>
        <li className="projects">
            <Link to="/projects">Projects</Link>
        </li>
        <li className="contacts">
            <Link to="/contacts">Contacts</Link>
        </li>
        <li className="blogs">
            <Link to="/blogs">BLogs</Link>
        </li>
    </ul>
    <SocialFollow />

    <div id="mobile" onClick={this.handleClick}>
     <i id="bar" className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>
  </nav>
)
}
}

export default Navbar;

