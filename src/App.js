/* eslint-disable jsx-a11y/img-redundant-alt */

import { useState } from "react";

import HomePage from "./component/HomePage";
import React from "react";
import "./style/Login.css";
import image from "./images/blueLogo.png";
import unknown from "./images/image 11.png";

function App() {
  const correctId = "tobiaspi361";
  const correctPassword = "$P!cKett2008";
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const handleId = (event) => {
     setID(event.target.value);
  };
  
  const handlePassword = (event) => {
     setPassword(event.target.value);
  };
  
  const handleValidation = (event) => {
    if (id === correctId && password === correctPassword) {
      setValid(true);
    } else {
      setError(true);
    }
  };
  return (
    <div className="App">
      {valid ? (
        <HomePage />
      ) : (
        <div className="containerLogin">
          <div className="head">
            <div className="name"> Deutsche Bank </div>
            <div className="logo">
              <img src={image} alt="image" className="loginLogohad"/>
            </div>
          </div>
          <div className="Loginbody">
            <div className="backgroundImage">
              <div className="login">
                {error ? <div className="error">Invalid Credentials</div> : ""}
                <label className="label" htmlFor="id">
                  Login ID
                </label>
                <input type="text" className="input" onChange={handleId} />
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  onChange={handlePassword}
                />
                <div className="checkBox">
                  <div>
                    <label htmlFor="virsualKeyBoard">
                      <input
                        type="checkbox"
                        className="checkBoxTick"
                        name="virsualKeyBoard"
                        id=""
                      />
                      Virtual Keyboard
                    </label>
                  </div>
                  <div className="forgotPassword"> Forgot Password </div>
                </div>
                <div> Defualt Page </div>
                <div className="spacebetween">
                  <div>
                    <img src={unknown} alt="" className="unknown" />
                  </div>
                  <button className="button" onClick={handleValidation}>
                    Login
                  </button>
                </div>
                <h4 className="note">
                  Note: Corporate customers, enter Login ID as(Customer
                  ID).(User ID).For example: -000123456. USER1
                </h4>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="name"> ©Deutsche Bank PCB </div>
            <div className="policy"> Policy | Terms and Conditions </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
