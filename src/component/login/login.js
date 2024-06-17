import React from "react";
import { useState } from "react";
import "./login.css";
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'

export default function Login({setUser}) {
  const [username,setUserName]= useState('');
  const[password,setPassword]= useState('');
  const navigate = useNavigate();
  function setUserNameFun(e){
    setUserName(e.target.value)
  }
  function setPasswordFun(e){
    setPassword(e.target.value)
  }
  async function loginUser(){
    const payload = {
      username, password
    }
    try{
      const loginuser = await axios({
        method: 'post',
        url: 'http://localhost:4000/users/login',
        data: payload,
        headers: {
        'Content-Type': 'application/json'
        }, 
      });
      
      document.cookie = `token = ${loginuser.data.token}`;
      document.cookie = `userid = ${loginuser.data.id}`;
      setUser(username)
      clearForm();
      navigate('/')
    }catch(error){
      if(error.response.data === 'Unauthorized' && error.response.status === 403){
        alert('Incorrect username or password');
      }
      console.log(error)
    }
  }
  function clearForm() {
    setUserName('');
    setPassword('')
  }
  return (
    <>
      <div className="login1">
        <h1>Login Page</h1>
        <div className="logindiv">
          <label ><b>User Name :</b></label>
          <input className="logininput" type="text" value={username} onChange={setUserNameFun} placeholder="Enter Username" />
        </div>
        <div className="logindiv">
          <label ><b>Password :</b></label>
          <input className="logininput" type="password" value={password} onChange={setPasswordFun} placeholder="Enter Password" />
        </div>
        <button type="submit" className="clear" onClick={loginUser}> Login </button>
        <button className="clear" onClick={clearForm}>Clear</button>
      </div>
      
    </>
  );
}
