import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services'

function App() {
 return(
  <div className='App'>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    <Services/>
    <Skills/>
  </div>
 )
  
}

export default App;
