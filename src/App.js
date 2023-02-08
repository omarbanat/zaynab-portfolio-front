import './App.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from "./components/Portfolio";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Portfolio></Portfolio>}></Route>
        <Route path="/admin/login" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
