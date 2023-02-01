import React from "react";
import "./Home.css";
import Profile from '../images/zaynab-profile.png';
import About from "./About";


const Home = () => {

    return (
        <div>
            <div className="home">
                <div className="description">
                 
                        <div className="hello"><p>Hello,</p></div>
                        <div className="title"><div className="state"><p>I'm</p></div>
                            <div className="name"><p>Zaynab Abd El NABI</p></div></div>
                        <div className="parag"><p>I'm a graphics designer, designing has become my everyday affair. masting styles, grids can't be less interesting.</p></div>
                        <div ><button className="btn1">Download CV</button></div>
                    
                </div>
                
                <div className="profileimage" >
                    <img src={Profile} alt="Zaynab's Profile" />
                </div>
                <div className="triangle"></div>
            </div>
            
            <About />
        </div>

    )
}

export default Home;