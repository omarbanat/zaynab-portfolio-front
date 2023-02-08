import './Skills.css';
import Skill from './Skill';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);

  const fetchSkillsData = async () => {
    const res = await axios.get(`${API_URL}/infos/getAllInformation`);
    const data = res.data.data;
    const ress = data.filter((el) => el.type === 'skills');
    setData(ress);
  };

  useEffect(() => {
    fetchSkillsData();
  }, []);

  return (
    <div className="admin-skills">
      <h1>Skills Section</h1>
      <div className="admin-skills__list">
        {data.map((el) => (
          <Skill key={el['_id']} objID={el['_id']} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
