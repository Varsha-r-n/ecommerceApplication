import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./productCategoryForm.css";

import { Table, Space } from "antd";

export default function ProductCategoryForm({ token }) {
  const [productCategoryName, setProductCategoryName] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    getProductCategories();
  }, []);
  function setProductCategoryNameFun(e) {
    setProductCategoryName(e.target.value);
  }
  async function saveProductCategoryDetails() {
    try {
      const payload = {
        productCategoryName,
      };
      let productCategory = await axios({
        method: "post",
        url: "http://localhost:4000/productCategory",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      setProductCategoryName("");
      await getProductCategories();
    } catch (error) {
      console.log(error);
    }
  }
  async function getProductCategories() {
    try {
      let productCategory = await axios({
        method: "get",
        url: "http://localhost:4000/productCategory",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      productCategory = productCategory.data.map((category, i) => {
        category["index"] = i + 1;
        return category;
      });
      setProductCategories(productCategory);
    } catch (error) {
      console.log(error);
    }
  }
  function clearProductCategoryDetails() {
    setProductCategoryName("");
  }
  async function deleteProductCategory(id) {
    console.log(id);
    let productCategory = await axios({
      method: "delete",
      url: `http://localhost:4000/productCategory/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    await getProductCategories();
  }
  const columns = [
    {
      title: "Serial No.",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Product Category Name",
      dataIndex: "productCategoryName",
      key: "productCategoryName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              deleteProductCategory(record._id);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="form">
        <h2>Product Category</h2>
        <div className="formElement">
          <label>Product Category Name: </label>
          <input
            type="text"
            value={productCategoryName}
            onChange={setProductCategoryNameFun}
          />
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
      <div className="categoryList">
        <Table dataSource={productCategories} columns={columns} />;
      </div>
    </>
  );
}
