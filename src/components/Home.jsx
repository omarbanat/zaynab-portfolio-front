import React from 'react';
import './Home.css';
import Profile from '../images/zaynab-profile.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const API_URL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [description, setDescription] = useState([]);

  const fetchInformation = async () => {
    await axios
      .get(`${API_URL}/infos/getAllInformation`)
      .then((response) => setDescription(response.data.data));
    console.log('home', description);
  };

 const fileDownload = require('js-file-download')
  const download = (e) => {
    e.preventDefault();
    axios({
      baseURL: API_URL,
      method: 'Get',
      responseType: 'blob',
    }).then((res) => {
      fileDownload(res.data, 'ZaynabAbdElNabi.pdf');
    });
  };

  useEffect(() => {
    fetchInformation();
  },[]);

  const homeData =
    description && description.find((data) => data.type === 'home')
      ? description.find((data) => data.type === 'home')
      : null;

  console.log(homeData);

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
            <button className="btn1"  onClick={(e) => download(e)}>Download CV</button>
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
