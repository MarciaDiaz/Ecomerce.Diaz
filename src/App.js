import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"

import ItemListContainer from "./Components/ItemListContainer";

import ItemDetailCointener from "./Components/ItemDetailContainer";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./Components/Cart";
import { CartProvider } from "./context/CartContext";



export default function App() {







 

  return (

<CartProvider>
  <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailCointener/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path='/' element={<Footer/>}/>
        </Routes>
    </BrowserRouter>
</CartProvider>

  )
}
