import React, { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [usrname, setUsrname] = useState("");
  // const [passwrd, setPasswrd] = useState("");
  const usrnameRef = useRef("");
  const passwrdRef = useRef("");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    console.log("username:", usrnameRef.current.value);
    console.log("password:", passwrdRef.current.value);
    if (
      usrnameRef.current.value === "admin" &&
      passwrdRef.current.value === "pass"
    ) {
      navigate("/pib/dashboard");
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-inner-wrapper">
          <div className="login-heading">
            <h2>Please Enter Proper Credentials Below</h2>
          </div>
          <div className="login-inputs">
            <div className="input-group">
              <div className="input-title">UserName</div>
              <input type="text" className="input-field" ref={usrnameRef} />
            </div>
            <div className="input-group">
              <div className="input-title">Password</div>
              <input type="password" className="input-field" ref={passwrdRef} />
            </div>
            <button type="button" id="login-submit" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
