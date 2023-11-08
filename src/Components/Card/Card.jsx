// Card.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { FaBahtSign } from "react-icons/fa6";
import "./Card.css";
import Button from "../Button/Button";

function Card({ product, onAdd, onRemove}) {
  const productId = product.id; 
  const storedCount = +window.localStorage.getItem(`count_${productId}`) || 0;
  const [count, setCount] = useState(storedCount);
  const { title, Image, price, descr } = product;






  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(product);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(product);
  };

  useEffect(() => {
    window.localStorage.setItem(`count_${productId}`, count);
  }, [count, productId]);

  return (
    <div className="card">
      <div className="image__container">
        <NavLink to={`/products/${product.id}`}>
          <img src={Image} alt={title} />
        </NavLink>
      </div>
      <br />
      <h4 className="card__title">{title}</h4>
      <h4 className="descr-container">
        <span className="card__descr">{descr}</span>
      </h4>
      <div className="btn-container">
        <Button
          title={`${count !== 0 ? "+" :  + price}`}
          type={`${count !== 0 ? "add" : "btn" + price}`}
          onClick={handleIncrement}
        />
        <span
          className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
        >
          {count}
        </span>
        {count !== 0 ? (
          <Button
            title={"-"}
            type={`${count !== 0 ? "remove-active" : "remove" + price}`}
            onClick={handleDecrement}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
