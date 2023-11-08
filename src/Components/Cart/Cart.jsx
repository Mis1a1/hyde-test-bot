import React from 'react'
import { motion } from "framer-motion";
import "./Cart.css";


function Cart ({cartItems, onAdd, onRemove })  {
    console.log(cartItems);
  return (
    <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
    <div className='cart-cantainer'>
    <h1 className="title"> Корзина</h1>

    {cartItems.length === 0 && (
        <div className='cart-items-empty'>Ничего не выбрано</div> 
    )}

    <div>
        {cartItems.map((item) => (
            <div key={item.id} className='cart-items-list' >
                <img
                className='cart-item-image'
                src={item.Image}
                alt={item.title}
                />
                <div>{item.title}</div>
        </div>
        ))}
    </div>
    </div>
    </motion.div>
  )
  
}

export default Cart;