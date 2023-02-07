import './App.css';
import Navbar from './components/Navbar';
// import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects/Projectss';
import Blogss from './components/Blogs/Blogss';
import Footer from './components/Footer';


import Experiences from './components/Experiences';
import Oneprojectpage from './components/Oneprojectpage/Oneprojectpage'
import ContactMe from './components/ContactMe';
import AllProjectsPage from './components/AllProjectsPage/AllProjectsPage';
import ExperienceSection from './components/ExperienceSection';

function App() {
 return(
  <div className='App'>
  <AllProjectsPage/>
  </div>
 )

}

export default App;

/* <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes> */
