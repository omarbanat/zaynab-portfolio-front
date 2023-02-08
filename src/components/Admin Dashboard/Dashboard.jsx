import './Dashboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../images/zaynab-profile.png';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Experiences from './Experiences';
import Skills from './Skills';
import Blogs from './Blogs';
import Projects from './Projects';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/admin/login');
    }
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-sidenavbar">
        <div className="image-container">
          <img src={profile} alt="Profile" />
        </div>
        <h3>Zaynab Abd El Nabi</h3>
        <ul>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/home">Home</a>
          </li>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/about">About</a>
          </li>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/services">Services</a>
          </li>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/experiences">Experiences</a>
          </li>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/skills">Skills</a>
          </li>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/projects">Projects</a>
          </li>
          <li className="dashboard-sidenavbar__list">
            <a href="/admin/blogs">Blogs</a>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
