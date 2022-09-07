import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"
import Producto from "./Components/producto";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import ItemDetailCointener from "./Components/ItemDetailContainer"
import './App.css'




export default function App() {


const saludo = 'hola!'

  let producto1 = { id: 100, name: "zapatilla nike", price: 100};
  let producto2 = { id: 101, name: "zapatilla lolo", price: 150};
  let producto3 = { id: 102, name: "zapatilla fila", price: 200};


 const stock = 10;
 const initial = 1;
 let totalStock = 0;

 const onAdd = (cantidad) => totalStock ===10? alert ("agotado") : totalStock <= cantidad;

  return (

<div>

<NavBar />

<ItemListContainer saludo={saludo} greeting = 'hello!'/>
<ItemDetailCointener/>
<ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
<Producto item={producto1}/>
<Producto item={producto2}/>
<Producto item={producto3}/>



<Footer/>




</div>


  )
}
