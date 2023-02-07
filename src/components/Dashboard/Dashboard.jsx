import React from "react";
import './Dashboard.css'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () =>{

    const navigate=useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
          navigate("/login")
        }
      }, []);

    return(
        <div className="Dashboard">
            <h1>Dashboard</h1>
        </div>
    )
}


export default Dashboard;