import React, {useEffect, useState}from 'react'
import { customFetch } from './customFetch'
import ItemList from './ItemList'
import productos from './productos'

const ItemListContainer = (props) => {

   
  const [listProducts, setListProducts]= useState([])
  const{saludo, greeting, stock, initial, onAdd} = props
  
  useEffect(()=>{

      customFetch(productos)
      .then(data=>setListProducts(data))


  },[])
  
  console.log (listProducts)
  
  
  
  return (
    
    
    <div style={{marginTop: "5px", border: "solid 2px black"}}>
    
    
    
    <p>{saludo}</p>
    <p>{greeting}</p>
    <ItemList listProducts={listProducts}/>
    
      <p>{stock}</p>
      <p>{initial}</p>
      <p>{onAdd}</p>
    </div>
  )
}

export default ItemListContainer