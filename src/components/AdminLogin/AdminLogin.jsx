import React, { useState } from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {

  
  const navigate=useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState('');


  const errRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);


  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/dashboard")
    }
  }, []);

  const API_URL = process.env.REACT_APP_API_URL
  //login function
  const login = async () => {
    axios
      .post(`${API_URL}/admin/login`, { email, password })
      .then((res) => {
  
        localStorage.setItem("token",res.data.token);
        navigate("/dashboard")
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg('No Server Response');
  
        } else if (err.response?.status === 400) {
          setErrMsg('Invalid Credentials');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      });
  };

  //   handleSubmit will call the login function with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email,
      password,
    });
    
  };

 
  return (
    <div >
   
        <div className="adminlogin-container">
          <div className="adminlogin-box-container">
            <div className="login-title">LOGIN</div>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <div className="admin-form">
              <form className="admin-form1" onSubmit={handleSubmit}>
                <div className="adminName-title">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="adminPassword-title">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="login">
                  <button className="login-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default AdminLogin;
