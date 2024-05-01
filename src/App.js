import Container from "./component/container/container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/login/login';
import Registration from './component/registration';
import NoPage from './component/noPage';
import Headercontainer from './component/headerContainer/headercontainer';
import { useState, useEffect } from "react";
function App() {
  const [user,setUser]= useState('');
  useEffect(()=>{
    if(user){
      console.log('-----',user)
    }
  },[user])
  return (
    <BrowserRouter>
      <>
      <Headercontainer user={user} />
      </>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="login" element={<Login setUser={setUser}/>} />
        <Route path="registration" element={<Registration/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

