import React from "react";
import './Dashboard.css'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () =>{

    const navigate=useNavigate();
    const handleLogout = ()=>{
      localStorage.removeItem("token");
      navigate("/admin/login")
    }

    useEffect(() => {
        if(!localStorage.getItem("token")){
          navigate("/admin/login")
        }
      }, []);

    
    return(
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <button className="buttonone" onClick={handleLogout}>logout</button>
        </div>
    )
}


export default Dashboard;