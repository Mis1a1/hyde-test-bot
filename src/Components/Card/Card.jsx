import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id, descr } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <br></br>
      <h4 className="card__title">
        {title}
      </h4>
     <h4 className="descr-container"><span className="card__price">{descr} </span></h4> 

      <div className="btn-container">
        <Button title={`${count !== 0 ? "+" : "$"+price}`} type={"add"} onClick={handleIncrement} />
        <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
        {count !== 0 ? (
          <Button title={"−"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
