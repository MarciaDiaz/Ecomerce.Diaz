import React, {useEffect, useState}from 'react'

import ItemList from './ItemList'

import {data} from '../mocks/dataMosck.js'


const ItemListContainer = (props) => {

   
  const [listProducts, setListProducts]= useState([])
  const[loading, setLoading]=useState(false)
  const{saludo, greeting} = props
  



  
  useEffect(()=>{

    
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
  
      {loading ? <p>Cargando2...</p>:<ItemList listProducts={listProducts}/>}
    </div>
  )
}

export default ItemListContainer