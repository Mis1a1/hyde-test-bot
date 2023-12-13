import React from 'react'
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BiMinus } from "react-icons/bi";
import Button from "@mui/material/Button";
import { BsFillCartCheckFill } from "react-icons/bs";



import "./Checkout.css";


function Checkout ({cartItems, onAdd, onRemove })  {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  function onBack() {
    navigate("/");
  }

  function onConfirm() {
    navigate("/form");
  }

  // const removeFromCart = () => {
  //   onRemove();
  // };

    console.log(cartItems);
  return (
    <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
 

    <div className='container-checkout'>
      <div className='checkout-content'>
        <div className='button-back-container-checkout'>
      <Button
          sx={{
            borderRadius: 3,
            backgroundColor: "black",
          }}
          variant="contained"
          onClick={() => {
            onBack();
          }}
        >
          Назад
        </Button>
        </div>
        <div className='button-forward-container-checkout'>
        <Button
          sx={{
            borderRadius: 3,
            backgroundColor: "black",
          }}
          variant="contained"
          onClick={() => {
            onConfirm();
          }}
        >
          заказать
        </Button>
        </div>
    <div className='price-total-container'>
      <p className='price-total-checkout'>Заказ на сумму: ${totalPrice}</p>
      <BsFillCartCheckFill className="cart-icon-checkout" />
    </div>

    {cartItems.length === 0 && (
        <div className='cart-items-empty'>Ничего не выбрано</div> 
    )}
        {cartItems.map((item) => (
            <div key={item.id} className='product-card' >
              <div className='product-info'>
                <div className='img-container-checkout'>
                <img
                className='cart-item-image'
                src={item.Image}
                alt={item.title}
                />
                </div>
                <p className='title-product-checkout'>{item.title}</p>
                <p>{item.price}</p>
                </div>
                <div className='button-container-checkout'>
                <button className="left-button-checkout" onClick={undefined}>
                <IoMdAdd className="plus-left-icon-checkout" />
              </button>
              </div>
                <div className='button-container-checkout'>
                <button className="right-button-checkout" onClick={undefined}>
              <BiMinus className="minus-right-icon-ckeckout" />
            </button>
            </div>
        </div>
        ))}
        </div>
        <div className='button-forward-container-checkout-big'>
        <Button
          sx={{
            borderRadius: 3,
            backgroundColor: "black",
            width: "100%"
          }}
          variant="contained"
          onClick={() => {
            onConfirm();
          }}
        >
          заказать
        </Button>
        </div>
    </div>
    </motion.div>
  )
  
}

export default Checkout;
