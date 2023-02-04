import './Experiences.css';
import ExperienceSection from './ExperienceSection';

const Experiences = () => {
  return (
    <div className="experience-section" id="experience">
      <h1>ExperienceSection</h1>
      <div className="experience-container">
        <ExperienceSection right={true} />
        <ExperienceSection right={false} />
        <ExperienceSection right={true} />
        <ExperienceSection right={false} />
      </div>
    </div>
  );
};

export default Experiences;
