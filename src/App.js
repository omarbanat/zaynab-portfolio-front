import './App.css';
import Dashboard from './components/Admin Dashboard/Dashboard';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" exact element={<AdminLogin />} />
        <Route path="/admin/login" exact element={<AdminLogin />} />
        <Route path="/admin/*" element={<Dashboard />}></Route>
        <Route path="/*" exact element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
