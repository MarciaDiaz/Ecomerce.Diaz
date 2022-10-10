import React, {useEffect, useState}from 'react'
import ItemList from './ItemList'
import { data } from '../mocks/dataMosck'
import { useParams } from 'react-router-dom'
import {collection ,getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/firebase'



const ItemListContainer = (props) => {

   
  const [listProducts, setListProducts]= useState([])
  const[loading, setLoading]=useState(false)
  const{categoriaId}= useParams()
  const{saludo, greeting} = props
  

//FIREBASE

useEffect(()=>{
  setLoading(true)
  const coleccionProductos= categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId)) : collection(db, "products")
  getDocs(coleccionProductos)
  .then((result)=> {
    const lista = result.docs.map((producto)=>{
      return{
        id:producto.id,
        ...producto.data()
      }
    })
    setListProducts(lista)
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
}, [categoriaId])
  
  
  
  
  /*
  
  //MOCKS
   useEffect(()=>{
  setLoading(true)
    data
     .then((res)=>{
       if(categoriaId){
         setListProducts(res.filter((item)=> item.category === categoriaId))
       }else{
         setListProducts(res)
       }
     })
     .catch((error)=> console.log(error))
     .finally(()=> setLoading(false))
   }, [categoriaId])
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