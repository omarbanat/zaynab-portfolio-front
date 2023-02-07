import axios from 'axios';
import { useEffect, useState } from 'react';
import './Experiences.css';
import ExperienceSection from './ExperienceSection';

const API_URL = process.env.REACT_APP_API_URL;

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  const fetchExperiences = async () => {
    const data = await axios.get(`${API_URL}/experience/getAll`);
    setExperiences(data.data.message);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="experience-section">
      <h1>Experiences</h1>
      <div className="experience-container">
        {experiences.map((experience) => (
          <ExperienceSection
            omar={experience['_id']}
            key={experience['_id']}
            right={experience.sort % 2}
            data={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
