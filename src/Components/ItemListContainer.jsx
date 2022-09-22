import React, {useEffect, useState}from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'
import {collection ,getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/firebase'



const ItemListContainer = (props) => {

   
  const [listProducts, setListProducts]= useState([])
  const[loading, setLoading]=useState(false)
  const{categoriaId}= useParams()
  const{saludo, greeting} = props
  

//FIREBASE

useEffect (()=>{
  const productos = categoriaId ? query( collection(db, "products", where("category","==", categoriaId))) : collection (db, "products")
  getDocs(productos)
  .then((result)=>{
    const lista = result.docs.map((product)=>{
      return{
        id: product.id,
        ...product.data()
      }
    })
    setListProducts(lista)
  })
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
},[categoriaId])

  
  
  
  
  
  
  //MOCKS
 /* useEffect(()=>{

    
      setLoading (true)
      data
      .then((res)=>setListProducts(res))
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))


  },[])
  */
  console.log (listProducts)
  
  
  
  return (
    
    
    <div style={{marginTop: "5px"}}>
    
    
    
    <p>{saludo}</p>
    <p>{greeting}</p>
  
      {loading ? <p>Cargando...</p>:<ItemList listProducts={listProducts}/>}
    </div>
  )
}

export default ItemListContainer