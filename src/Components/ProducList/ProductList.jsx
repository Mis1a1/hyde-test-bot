import { useState } from "react";
import "./ProductList.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const { getData, getShiski } = require("../../db/db");
const foods = getData();

const shishki = getShiski();


function MainPage() {
  const [cartItems, setCartItems] = useState([]);


  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };


  console.log(cartItems)

  return (
    <div >
    <div className="header">
    <Header/>
    </div>
      <Footer cartItems={cartItems}/>
        <div className="cards__container" id="home">
      {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
        </div>
        <div className="cards__shishki" id="about">
      {shishki.map((shishka) => {
          return (
            <Card food={shishka} key={shishka.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
        </div>
        <div className="cards__shishki" id="contact">
      {shishki.map((shishka) => {
          return (
            <Card food={shishka} key={shishka.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
        </div>

        <div className="cards__shishki" id="service">
      {shishki.map((shishka) => {
          return (
            <Card food={shishka} key={shishka.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
        </div>

      </div>
  );
}

export default MainPage;
