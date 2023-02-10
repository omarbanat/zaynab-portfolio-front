import React from "react";
import "./Navbar.css";
// import {Link} from "react-router-dom";
import SocialFollow from "./SocialFollow";
import "./SocialFollow.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeMenu = () => setIsNavExpanded(false);

  const OnClickHandler = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navigation">
       <p className="site-title" onClick={OnClickHandler}>
        ZAYNAB <span>ABD AL NABI</span>
      </p>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FaBars />
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul >
        <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={900}
              onClick={closeMenu}
            >
          <li div="about"   onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
           
              About
          
          </li>  </Link>
          <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              onClick={closeMenu}
            >
          <li   onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
           
            Services
           
          </li>
          </Link>
          <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-10}
              duration={1500}
              onClick={closeMenu}
            >
          <li div="experience">
           
              Experience
           
          </li>
          </Link>
          <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              onClick={closeMenu}
            >
          <li div="projects">
            
              Projects
           
          </li>
          </Link>
          <Link
              to="blogs"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              onClick={closeMenu}
            >
          <li div="blogs">
         
              Blogs
           
          </li>
          </Link>
          <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              onClick={closeMenu}
            >
          <li div="contacts">
          
              Contacts
           
          </li>
          </Link>
        </ul>
      </div>
      <div className="socailfollow">
        <SocialFollow />
      </div>
    </nav>
  );
};

export default Navbar;
