// Modal.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProductDetails.css";
import { data } from "../../db/db";
import Footer from "../../Components/Footer/Footer";
import { IoMdAdd } from "react-icons/io";
import { BiMinus } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const products = data;

function ProductDetails({ cartItems, onAdd, onRemove }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const thisProduct = products.find((prod) => prod.id === productId);

  const addProduct = () => {
    onAdd(thisProduct);
  };

  const removeProduct = () => {
    onRemove(thisProduct);
  };

  function onBack() {
    navigate("/");
  }
  console.log(cartItems);

  return (
    <>
      <motion.div
        className="modal-overlay"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
      >
        <div className="modal-content">
          <div className="container-product-details">
            <img
              className="img-product"
              src={thisProduct.Image}
              alt={thisProduct.title}
            />
          </div>
          <div className="product-info-container"></div>
          <h1 className="title"> {thisProduct.title}</h1>
          <p className="price"> ${thisProduct.price}</p>
          <p className="descr">{thisProduct.descr}</p>
          <div className="btn-title-container"></div>
          <div className="btn-container-add">
            <div className="buttons-container">
              <button className="left-button" onClick={addProduct}>
                <IoMdAdd className="arrow-left-icon" />
              </button>
            </div>

            <button className="right-button" onClick={removeProduct}>
              <BiMinus className="delete-icon" />
            </button>
          </div>

          <button
            className="close-button"
            onClick={() => {
              onBack();
            }}
          ></button>
          <AiFillCloseCircle className="x-button" />
          <button
            className="close-button"
            onClick={() => {
              onBack();
            }}
          ></button>
        </div>
        <Footer cartItems={cartItems} />
      </motion.div>
    </>
  );
}

export default ProductDetails;
