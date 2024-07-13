import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./productCategoryForm.css";
import  { useNavigate } from 'react-router-dom'

export default function ProductCategoryForm() {
  
  const navigate = useNavigate();
  const [productCategoryName, setProductCategoryName] = useState("");
  function setProductCategoryNameFun(e) {
    setProductCategoryName(e.target.value)
  }
  function saveProductCategoryDetails() {
    
  }
  function clearProductCategoryDetails() {
    setProductCategoryName("")
  }
  return (
    <div className="form">
      <div className="formElement">
        <label>Product Category Name: </label>
        <input type="text" value={productCategoryName} onChange={setProductCategoryNameFun} />
      </div>
      <div className="buttonElement">
        <button className="button" onClick={saveProductCategoryDetails}>
        Save Product Category
        </button>
        <button className="button" onClick={clearProductCategoryDetails}>
          Reset
        </button>
      </div>
    </div>
  );
}
