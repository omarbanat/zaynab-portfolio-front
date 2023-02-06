import React, { useState } from 'react';
import './AdminLogin.css';
import axios from 'axios';
// import { useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';

// const url = `http://8000/admin/login`;

// await axios
//   .get(url)
//   .then((response) =>
//     setData(response.data))

// PORTFOLIO_API_URL = 'localhost:8000'

const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSucces] = useState(false);
  const [token, setToken] = useState();

  // const errRef = useRef();
  // const emailRef = useRef();

  //   useEffect(()=> {
  //     emailRef.current.focus();
  //   },[])

  // useEffect(() => {
  //   setErrMsg('');
  // });




  const login = async () => {
    axios
      .post(`http://localhost:8000/admin/login`, { email, password })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
       
      //  if (err.res?.status === 401) {
      //     setErrMsg('unauthorized');
      //   } else {
      //     setErrMsg('Login Failed');
      //   }
      //   errRef.current.focus();
      });
  };




  //   handleSubmit will call the adminlogin with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await login({
      email,
      password,
    });
    setToken(token);
  };


  

  return (
  
   <div>
      {token ? (
        <Dashboard />
      ) : (
        <div className="adminlogin-container">
          <div className="adminlogin-box-container">
            <div className="login-title">LOGIN</div>
            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}

            <div className="admin-form">
              <form className="admin-form1" onSubmit={handleSubmit}>
                <div className="adminName-title">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Email"
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
      )}
  </div>
  );
};

export default AdminLogin;
