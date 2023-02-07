import React from 'react';
import './Home.css';
import Profile from '../images/zaynab-profile.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [description, setDescription] = useState();

  const fetchInformation = async () => {
    await axios
      .get(`${API_URL}/infos/getAllInformation`)
      .then((response) => setDescription(response.data.data));
    console.log('product', description);


  };

  useEffect(() => {
    fetchInformation();
  }, []);

  const homeData =
    description && description.length > 0 ? description[0] : null;

  return (
    <div>
      <div className="home">
        <div className="home-description">
          <div className="home-hello">
            <p>Hello,</p>
          </div>
          <div className="home-title">
            <div className="state">
              <p>I'm</p>
            </div>
            <div className="home-name">
              <p>Zaynab Abd El NABI</p>
            </div>
          </div>
          <div className="parag">
            <p>{homeData?.fullDescription}</p>
          </div>
          <div>
            <button className="btn1">Download CV</button>
          </div>
        </div>

        <div>
          <img
            className="home-profileimage"
            src={Profile}
            alt="Zaynab's Profile"
          />
        </div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Home;
