import './App.css';
import Dashboard from './components/Admin Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
