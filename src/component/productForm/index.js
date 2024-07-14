import React from "react";
import { useState, useEffect } from "react";
import { Select, Table, Space } from "antd";
import axios from "axios";
import "./productForm.css";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ token }) {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState(
    "Select product category"
  );
  useEffect(() => {
    getProducts();
  }, []);
  async function saveProductDetailsFun(e) {
    if (
      productCategory === "Select product category" ||
      productName === "" ||
      productPrice === "" ||
      productQuantity === ""
    ) {
      alert("Please select valid product category, name, price, quantity");
    } else {
      try {
        const payload = {
          productName,
          productPrice,
          productQuantity,
          productCategory,
        };
        await axios({
          method: "post",
          url: "http://localhost:4000/products",
          data: payload,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        clearProductDetails();
        await getProducts();
      } catch (error) {
        console.log(error);
      }
    }
  }
  function clearProductDetails() {
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setProductCategory("Select product category");
  }
  async function getProducts() {
    try {
      const pc = await getProductCategories();
      console.log(pc)
      let products = await axios({
        method: "get",
        url: "http://localhost:4000/products",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      products = products.data.map((product, i) => {
        product["index"] = i + 1;
        const category = pc.find(category => category.value === product.productCategory)
        if(category){
            product.productCategory = category.label;
        }
        return product;
      });
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }
  async function getProductCategories() {
    try {
      let pc = await axios({
        method: "get",
        url: "http://localhost:4000/productCategory",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      pc = pc.data.map((category, i) => {
        return {
          label: category.productCategoryName,
          value: category._id,
          key: category._id,
        };
      });
      setProductCategories(pc);
      return pc;
    } catch (error) {
      console.log(error);
    }
  }
  const onChange = (value) => {
    setProductCategory(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  async function deleteProduct(id) {
    await axios({
      method: "delete",
      url: `http://localhost:4000/products/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    await getProducts();
  }
  const columns = [
    {
      title: "Serial No.",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Product Quantity",
      dataIndex: "productQuantity",
      key: "productQuantity",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              deleteProduct(record._id);
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
        <h2>Product</h2>
        <div className="formElement">
          <label>Product Category: </label>
          <Select
            showSearch
            placeholder="Select a category"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            value={productCategory}
            options={productCategories}
          />
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
      <div className="tableDiv">
        <Table dataSource={products} columns={columns} />;
      </div>
    </>
  );
}
