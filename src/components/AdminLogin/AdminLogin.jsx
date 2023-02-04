import React from "react";
import './AdminLogin.css'


const AdminLogin = ()=>{

    return (
        // <label for="adminName"id="Admin Name">Admin Name</label>
        // <label for="password">Password</label>

        <div className="adminlogin-container">

            <div className="adminlogin-box-container">


                  <div className="login-title">LOGIN</div>
                  <div className="admin-form">
                      <form className="admin-form1">     
                         <div className="adminName-title">
                         <input placeholder="Email"></input></div>
                         <div className="adminPassword-title">
                        <input placeholder="Password"></input></div>
                     <div className="login"><button className="login-btn">Login</button></div>
                        
                      </form>
                  </div>
                 

            </div>
        </div>
    )
}

export default AdminLogin;