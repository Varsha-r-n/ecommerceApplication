import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./registration.css";
import  { useNavigate } from 'react-router-dom'

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobNo, setMobNo] = useState("");
  const navigate = useNavigate();
  function setUserName(e) {
    setName(e.target.value);
  }
  function setUserEmail(e) {
    setEmail(e.target.value);
  }
  function setUserPassword(e) {
    setPassword(e.target.value);
  }
  function setUserMobNo(e) {
    setMobNo(e.target.value);
  }
  async function saveUserDetails() {

    const payload = {
      name, mobNo, email, password
    }
    
    await axios({
      method: 'post',
      url: 'http://localhost:4000/users/register',
      data: payload,
      withCredentials: false,
      headers: {
      'Content-Type': 'application/json'
      }, 
    });
    console.log(name, mobNo, email, password);
    clearUserDetails();
    navigate('/login')
  }
  function clearUserDetails() {
    setName("");
    setEmail("");
    setPassword("");
    setMobNo("");
  }
  return (
    <div className="registrationForm">
      <div className="formElement">
        <label>Name: </label>
        <input type="text" value={name} onChange={setUserName} />
      </div>
      <div className="formElement">
        <label>Email: </label>
        <input type="text" value={email} onChange={setUserEmail} />
      </div>
      <div className="formElement">
        <label>Password: </label>
        <input type="password" value={password} onChange={setUserPassword} />
      </div>
      <div className="formElement">
        <label>Mobile Number: </label>
        <input type="number" value={mobNo} onChange={setUserMobNo} />
      </div>
      <div className="buttonElement">
        <button className="registerButton" onClick={saveUserDetails}>
          Register User
        </button>
        <button className="registerButton" onClick={clearUserDetails}>
          Reset
        </button>
      </div>
    </div>
  );
}
