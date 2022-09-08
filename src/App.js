import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"

import ItemListContainer from "./Components/ItemListContainer";

import ItemDetailCointener from "./Components/ItemDetailContainer";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



export default function App() {


const saludo = 'hola!'




 const stock = 10;
 const initial = 1;
 

 

  return (

<BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailCointener/>}/>
        </Routes>
        </BrowserRouter>


  )
}
