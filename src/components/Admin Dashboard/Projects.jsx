import './Projects.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Project from './Project';

const Skills = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);

  const fetchProjectsData = async () => {
    const res = await axios.get(`${API_URL}/infos/getAllInformation`);
    const data = res.data.data;
    const ress = data.filter((el) => el.type === 'projects');
    setData(ress);
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  return (
    <div className="admin-projects">
      <h1>Projects Section</h1>
      <div className="admin-projects__list">
        {data.map((el) => (
          <Project key={el['_id']} objID={el['_id']} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
