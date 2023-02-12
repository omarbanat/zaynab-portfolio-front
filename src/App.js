import './App.css';
import Dashboard from './components/Admin Dashboard/Dashboard';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import AllProjectsPage from './components/AllProjectsPage/AllProjectsPage';
import AllBlogsPage from './components/AllBlogsPage/AllBlogsPage';

import Oneblogpage from './components/Oneblogpage/Oneblogpage';
import RealProjectOne from './components/RealProjectOne/RealProjectOne';
import RealProjectTwo from './components/RealProjectTwo/RealProjectTwo';
import RealProjectThree from './components/RealProjectThree/RealProjectThree';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" exact element={<AdminLogin />} />
        <Route path="/admin/login" exact element={<AdminLogin />} />
        <Route path="/admin/*" element={<Dashboard />}></Route>
        <Route path="/*" exact element={<Main />} />
        <Route path="/projects" element={<AllProjectsPage/>}/>
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/Home" element={<Main/>}/>
        <Route path="/portfolio-with-dashboard" element={<RealProjectThree />}/>
        <Route path="/financial-app-with-mobile-app" element={<RealProjectOne />} />
        <Route path="/my-doctor" element={<RealProjectTwo />} />
        <Route path="/blogid" element={<Oneblogpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
