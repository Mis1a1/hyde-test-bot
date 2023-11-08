import React from "react";
import Button from "../Button/Button";
// import baht from "../../images/baht.svg";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaBahtSign } from "react-icons/fa6";
import "./Footer.css";

function Footer({ cartItems }) {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  function onCheckout() {
    navigate("/form");
  }
  function onCart() {
    navigate("/cart");
  }

  return (
    <div className={`${cartItems.length === 0 ? "hiden-footer" : "footer"}`}>
      <div className="summ-container"> Сумма: <FaBahtSign className="icon-baht"/> {" "}+{totalPrice} </div>
      <div className="button-container">
        <button className="button-cart" onClick={onCart}>
          {" "}
          <BsFillCartFill className="cart-icon" />
        </button>

        <button
          className="button-cart"
          onClick={onCheckout}

        >
          <MdShoppingCartCheckout className="cart-icon" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
