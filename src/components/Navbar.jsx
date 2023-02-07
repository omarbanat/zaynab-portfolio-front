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
        <ul>
          <li div="about">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={900}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              onClick={closeMenu}
            >
            Services
            </Link>
          </li>
          <li div="experience">
            <Link
              to="/experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Experience
            </Link>
          </li>
          <li div="projects">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li div="blogs">
            <Link
              to="blogs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              BLogs
            </Link>
          </li>
          <li div="contacts">
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className="socailfollow">
        <SocialFollow />
      </div>
    </nav>
  );
};

export default Navbar;
