import Container from "./component/container/container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/login";
import Registration from "./component/registration";
import NoPage from "./component/noPage";
import Headercontainer from "./component/headerContainer/headercontainer";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCategoryForm from "./component/productCategoryForm";
import ProductForm from "./component/productForm";
function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token && !user) {
      async function fetchdata() {
        let token = '';
        let userId = '';
        const cookieArr = document.cookie.split(';');
        cookieArr.forEach(cookie => {
          if(cookie.indexOf('userid') > -1){
            userId = cookie.split('=')[1];
          } else if(cookie.indexOf('token') > -1){
            token = cookie.split('=')[1];
          }
        })
        try {
          const userDetails = await axios({
            method: "get",
            url: `http://localhost:4000/users/${userId}`,
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
  }, []);
  return (
    <BrowserRouter>
      <>
        <Headercontainer setUser={setUser} user={user} />
      </>
      <Routes>
        <Route path="/" element={<Container user={user} />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="registration" element={<Registration />} />
        <Route path="productCategory" element={<ProductCategoryForm />} />
        <Route path="product" element={<ProductForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
