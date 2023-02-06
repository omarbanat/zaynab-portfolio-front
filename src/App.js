// import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Experiences from './components/Experiences'
// import Dashboard from './components/Dashboard/Dashboard';



function App() {


  // //Storing the token in a memory using usestate
  // const [token, setToken] = useState();

  

  // //Add a conditional statement to display Login if the token is falsy
  // if (!token) {
  //   //Pass the setToken function to the Login component:
  //   return <AdminLogin setToken={setToken} />
  // } else {
  //   return <Dashboard />
  // }

  //  useEffect(() => {

  //   if(!token){

  //     setPath('AdminLogin')
  //   }
  //   else{
  //     setPath('Dashboard')
  //   }

  //  },[token])


  return (
    <div className='App'>

      <Navbar />
      <Home />
      <About />
      <Services />
      <Experiences />
      <Skills />
      <Footer />
     


      {/* <BrowserRouter>
      <Switch>
          <Route path="/dashboard">
            <Dashboard />
            </Route>
       </Switch>
    </BrowserRouter> */}

      <Routes>
        <Route path="/login" element={<AdminLogin/>}></Route>
      </Routes>
    </div>
  )

}

export default App;


/* <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/about" element={<About></About>}></Route>
   </Routes> */