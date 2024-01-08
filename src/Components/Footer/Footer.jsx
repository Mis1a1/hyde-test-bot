import React from "react";
// import Button from "../Button/Button";
// import baht from "../../images/baht.svg";
import { useNavigate } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
// import { FaBahtSign } from "react-icons/fa6";
import "./Footer.css";

function Footer({ cartItems }) {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  function onCart() {
    navigate("/checkout");
  }

  return (
    <div className={`${cartItems.length === 0 ? "hiden-footer" : "footer"}`}>
      <div className="summ-container"> ฿{totalPrice} </div>
      <div className="button-container">
        <button className="button-cart" onClick={onCart}>
          {" "}
          <MdShoppingCartCheckout className="cart-icon" />
        </button>

       
      </div>
    </div>
  );
}

export default Footer;
