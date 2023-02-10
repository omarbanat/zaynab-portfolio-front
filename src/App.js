import './App.css';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Admin Dashboard/Dashboard';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import Blogss from './components/Blogs/Blogss';
import Home from './components/Home'
import Oneblogpage from './components/Oneblogpage/Oneblogpage';
import Projects from './components/Projects/Projectss';
import Test from './components/Test'




import Oneprojectpage from '../src/components/Oneprojectpage/Oneprojectpage';
import AllProjectsPage from '../src/components/AllProjectsPage/AllProjectsPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Projects" element={<AllProjectsPage />} />
        <Route path="/ProjectID" element={<Oneprojectpage />} />
      </Routes>
      <Test />
    </div>
  );
}







