import React from "react";
import './AdminLogin.css'


const AdminLogin = ()=>{

    return (

        <div className="adminlogin-container">

            <div className="adminlogin-box-container">


                  <div className="login-title">Login</div>
                  <div className="admin-form">
                      <form className="admin-form1">     
                         <div className="adminName-title"><label for="adminName"id="Admin Name">Admin Name</label>
                         <input placeholder="Write your name"></input></div>
                         <div className="adminPassword-title"><label for="password">Password</label>
                        <input placeholder="Write your password"></input></div>
                         <div className="login"><button className="login-btn">Login</button></div>
                        
                      </form>
                  </div>
                 

            </div>
        </div>
    )
}

export default AdminLogin;