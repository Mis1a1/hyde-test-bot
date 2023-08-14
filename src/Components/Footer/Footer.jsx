import React from "react";
import Button from "../Button/Button";
import baht from "../../images/baht.svg";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer({ cartItems}) {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  function onCheckout() {
    navigate("/form");
  }
  console.log(cartItems);

  return (
    <div className={`${cartItems == 0 ? "hiden" : "footer" }`}>
      <br /> <span className="summ">Сумма: <br></br>  {totalPrice}</span><span><img className="baht"src={baht}/></span>
      <Button
      type={"checkout"}
      disable={cartItems.length === 0 ? true : false}
      title={`${cartItems.length === 0 ? "Корзина пуста" : "Заказать"} `}
      onClick={onCheckout}
    ></Button>
    
    </div>
  );
}

export default Footer;
