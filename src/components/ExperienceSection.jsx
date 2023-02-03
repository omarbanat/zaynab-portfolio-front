import './ExperienceSection.css';
import logo from '../assets/logo.png';

const ExperienceSection = ({ right }) => {
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
            <h3>FULL STACK WEB DEVELOPER</h3>
            <h5>Codi Tech - Tripoli, Lebanon</h5>
          </div>
          <p>Feb 2021 - Sep 2021</p>
        </div>
        {/* ) : (
          <div className="experience-box__title-container">
            <p>Feb 2021 - Sep 2021</p>
            <div className="experience-box__title title-container__right">
              <h3>FULL STACK WEB DEVELOPER</h3>
              <h5>Codi Tech - Tripoli, Lebanon</h5>
            </div>
          </div>
        )} */}
        <ul className="experience-box__list">
          <li>
            Back end (NodeJs(Express), PHP(Laravel), SQL (MySQL, Postgres),
            NoSQL (MongoDB))
          </li>
          <li>
            Front end (JavaScript, React),Mobile Development (React Native)
          </li>
          <li>Project Management (AGILE Methodology)</li>
          <li>Content Management System (WordPress)</li>
        </ul>
        <div className="experience-box__skills">
          <p>Nodejs</p>
          <p>Express</p>
          <p>Html</p>
          <p>CSS</p>
        </div>
      </div>
      {/* {!right && (
        <div className="connection">
          <div className="connection__line"></div>
          <div className="connection__circle">
            <img src={logo} alt="logo" />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ExperienceSection;
