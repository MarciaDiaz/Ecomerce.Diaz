import React, {useEffect, useState}from 'react'
import { customFetch } from './customFetch'
import ItemList from './ItemList'
import productos from './productos'
import {data} from '../mocks/dataMosck.js'


const ItemListContainer = (props) => {

   
  const [listProducts, setListProducts]= useState([])
  const[loading, setLoading]=useState([])
  const{saludo, greeting, stock, initial, onAdd} = props
  
  
  useEffect(()=>{

      customFetch(productos)
      .then(data=>setListProducts(data))
      setLoading (true)
      data
      .then((res)=>setListProducts(res))
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))


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
      {loading ? <p>Cargando...</p>:<ItemList productList={listProducts}/>}
    </div>
  )
}

export default ItemListContainer