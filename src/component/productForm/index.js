import React from "react";
import { useState } from "react";
import axios from "axios";
import "./productForm.css";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");

  function saveProductDetailsFun(e) {}
  function clearProductDetails() {
    setProductName("");
  }
  return (
    <div className="form">
      <div className="formElement">
        <label>Product Category: </label>
        <select className="categorySelect">
          <option>Option 1</option>
          <option>Option 1</option>
          <option>Option 1</option>
        </select>
      </div>
      <div className="formElement">
        <label>Product Name: </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
      </div>
      <div className="formElement">
        <label>Product Price: </label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
      </div>
      <div className="formElement">
        <label>Product Quantity: </label>
        <input
          type="number"
          value={productQuantity}
          onChange={(e) => {
            setProductQuantity(e.target.value);
          }}
        />
      </div>
      <div className="buttonElement">
        <button className="button" onClick={saveProductDetailsFun}>
          Save Product
        </button>
        <button className="button" onClick={clearProductDetails}>
          Reset
        </button>
      </div>
    </div>
  );
}
