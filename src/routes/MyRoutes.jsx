import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from "../pages/MainPage/MainPage";
import Form from '../Components/Form/Form';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import Checkout from '../Components/Checkout/Checkout';
import { AnimatePresence } from 'framer-motion';


function MyRoutes({productItems, cartItems, onAdd, onRemove}) {

  const location = useLocation();

  return (
    <div>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path={'/'} element={<MainPage productItems={productItems} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}></Route>
    <Route path={'/form'} element={<Form cartItems={cartItems}/>}></Route>
    <Route path='/products/:productId' element={ <ProductDetails cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}></Route>
    <Route path='checkout' element={ <Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}> </Route>
    </Routes>
    </AnimatePresence>
    </div>
  )
}

export default MyRoutes