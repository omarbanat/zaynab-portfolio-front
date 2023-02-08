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
import Oneprojectpage from './components/Oneprojectpage/Oneprojectpage';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experiences />
      <Skills />
      <Blogss />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
