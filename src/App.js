import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import MainPage from "./Components/ProducList/ProductList";
import Checkout from './Components/Form/Form'


const tele = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tele.ready();
  });


  return (
   <div>
    <Routes>
      <Route path={'/'} element={<MainPage />}></Route>
      <Route path={'form'} element={<Checkout/>}></Route>
    </Routes>

   </div>
  );
}

export default App;
