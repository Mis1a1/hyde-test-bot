// import { useEffect, useState } from "react";
import "./MainPage.css";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { motion } from "framer-motion";


function MainPage({productItems, cartItems, onAdd, onRemove}) {

  console.log(cartItems);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="header">
        <Header />
      </div>

      <div className="cards__container" id="home">
        {productItems.map((item) => {
          return (
            <>
              <Card
                product={item}
                key={productItems.id}
                onAdd={onAdd}
                onRemove={onRemove}
                prices={productItems.price}
              />
            </>
          );
        })}
      </div>
      <div className="cards__shishki" id="about">
        {productItems.map((item) => {
          return (
            <Card
              product={item}
              key={item.id}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          );
        })}
      </div>
      <div className="cards__shishki" id="contact">
        {productItems.map((item) => {
          return (
            <Card
              product={item}
              key={item.id}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          );
        })}
      </div>
      <div className="cards__shishki" id="service">
        {productItems.map((item) => {
          return (
            <Card
              product={item}
              key={item.id}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          );
        })}
      </div>
      <Footer cartItems={cartItems} />
    </motion.div>
  );
}

export default MainPage;
