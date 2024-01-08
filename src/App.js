import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from '../src/routes/MyRoutes';
const { data } = require("./db/db");


const tele = window.Telegram.WebApp;

function App() {
  const productItems = data;
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]")
  const [cartItems, setCartItems] = useState(cartLocalStorage)

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItems))
  }, [cartItems])



  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
      
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };



  useEffect(() => {
    tele.ready();
  });


  return (

   <div>
    <Router>
    <MyRoutes productItems={productItems} cartItems={cartItems} onRemove={onRemove} onAdd={onAdd}   />
    </Router>
   </div>
  );
}

export default App;
