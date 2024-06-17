import Container from "./component/container/container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/login";
import Registration from "./component/registration";
import NoPage from "./component/noPage";
import Headercontainer from "./component/headerContainer/headercontainer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (user) {
      console.log("-----", user);
    } else if (document.cookie) {
      async function fetchdata() {
        console.log("--doc coo---", document.cookie);
        const token = document.cookie.split('=')[1]; 
        try {
          const userDetails = await axios({
            method: "get",
            url: "http://localhost:4000/users",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          });
          setUser(userDetails.data.email)
        } catch (error) {
          console.log(error);
        }
      }
      fetchdata();
    } else{
      console.log('user not logged in')
    }
  }, [user]);
  return (
    <BrowserRouter>
      <>
        <Headercontainer setUser={setUser} user={user} />
      </>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
