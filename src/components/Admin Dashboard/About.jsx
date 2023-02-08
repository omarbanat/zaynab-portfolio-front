import './About.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [ID, setID] = useState('');
  const [title, setTitle] = useState('');
  const [fullDescription, setFullDescription] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  const fetchAboutData = async () => {
    const res = await axios.get(`${API_URL}/infos/getAllInformation`);

    res.data.data.forEach((obj) => {
      if (obj.type == 'about') {
        setID(obj['_id']);
        setTitle(obj.title);
        setFullDescription(obj.fullDescription);
      }
    });
  };

  const updateAboutData = async () => {
    await axios.put(`${API_URL}/infos/updatePrevWorkByID/${ID}`, {
      type: 'about',
      title: title,
      image: null,
      description: null,
      fullDescription: fullDescription,
    });
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    updateAboutData();
  };

  return (
    <div className="admin-about">
      <h1>About Section</h1>
      <div className="admin-about__container">
        <label htmlFor="">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Full Description:
          <textarea
            type="text"
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
          />
        </label>
        <div className="admin-btns">
          <button className="btn-admin">Cancel</button>
          <button className="btn-admin btn-primary" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
