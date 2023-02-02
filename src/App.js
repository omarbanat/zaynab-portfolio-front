import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
 return(
  <div className='App'>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    
    <Footer/>
  </div>
 )
  
}

export default App;
