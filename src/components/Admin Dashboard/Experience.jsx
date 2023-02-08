import './Experience.css';
import { useState } from 'react';
import axios from 'axios';

const Experience = ({ objID, data }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const {
    sort: _sort,
    city: _city,
    companyName: _companyName,
    country: _country,
    startDate: _startDate,
    endDate: _endDate,
    position: _position,
    skills: _skills,
    tasks: _tasks,
  } = data;

  const [sort, setSort] = useState(_sort);
  const [city, setCity] = useState(_city);
  const [companyName, setCompanyName] = useState(_companyName);
  const [country, setCountry] = useState(_country);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [position, setPosition] = useState(_position);
  const [skills, setSkills] = useState(_skills);
  const [tasks, setTasks] = useState(_tasks);

  const updateExperienceData = async () => {
    const ress = await axios.put(
      `${API_URL}/experience/updateExperienceID/${objID}`,
      {
        sort,
        city,
        country,
        companyName,
        position,
        startDate,
        endDate,
        skills,
        tasks,
      }
    );
    console.log(ress);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateExperienceData();
  };

  return (
    <div className="admin-experience__container">
      {/* <label htmlFor="">
        Sort:
        <input
          type="text"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        />
      </label> */}
      <label htmlFor="">
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label htmlFor="">
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Description:
        <textarea
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Tasks:
        <textarea
          type="text"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Skills:
        <textarea
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </label>
      <div className="admin-btns">
        <button className="btn-admin">Cancel</button>
        <button className="btn-admin btn-primary" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Experience;
