import './Experiences.css';
import axios from 'axios';
import Experience from './Experience';
import { useState, useEffect } from 'react';

const Experiences = () => {
  const [data, setData] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchExperienceData = async () => {
    const res = await axios.get(`${API_URL}/experience/getAll`);
    setData(res.data.message);
  };

  useEffect(() => {
    fetchExperienceData();
  }, []);

  return (
    <div className="admin-experiences">
      <h1>Experiences Section</h1>
      <div className="admin-experiences__list">
        {data
          .sort((a, b) => a.sort - b.sort)
          .map((el) => (
            <Experience objID={el['_id']} key={el['_id']} data={el} />
          ))}
      </div>
    </div>
  );
};

export default Experiences;
