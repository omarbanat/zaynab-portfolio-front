import './ExperienceSection.css';
import { format } from 'date-fns';
import logo from '../assets/logo.png';

const ExperienceSection = ({ omar, right, data }) => {
  const {
    city,
    companyName,
    country,
    endDate,
    position,
    skills,
    sort,
    startDate,
    tasks,
  } = data;

  return (
    <div className={`${right ? 'left' : 'right'}`}>
      <div className={`connection ${!right ? 'connection__right' : ''}`}>
        <div className="connection__circle">
          <img src={logo} alt="logo" />
        </div>
        <div className="connection__line"></div>
      </div>

      <div className="experience-box">
        <div
          className={`experience-box__title-container ${
            !right ? 'experience-box__title-container__right' : ''
          }`}
        >
          <div className="experience-box__title">
            <h3>{position}</h3>
            <h5>{`${companyName} - ${city}, ${country}`}</h5>
          </div>
          <p>{`${format(new Date(startDate), 'MMM yyyy')} - ${format(
            new Date(endDate),
            'MMM yyyy'
          )}`}</p>
        </div>
        <ul className="experience-box__list">
          {tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
        <div className="experience-box__skills">
          {skills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
