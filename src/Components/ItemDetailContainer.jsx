import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useState,  useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { data } from '../mocks/dataMosck'
import ItemDetail from './ItemDetail'




const ItemDetailCointener = () => {

const [productDetail, setProductDetail]= useState({});
const [loading, setLoading]= useState(true);
const {id} = useParams();

useEffect(()=>{
  //le decimos nuestra base de datos y en que collecion tiene que ir
  const coleccionProd = collection(db, "products")
  // hacer una referencia que me traiga el ID del useParams
  const referenciaDoc = doc(coleccionProd, id)
  //traemos el documento
  getDoc(referenciaDoc)
  .then((result)=>{
    setProductDetail({
      id:result.id,
      ...result.data()
    })
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
}, [])





/*useEffect (()=>{

data
.then((res)=> setProductDetail(res.find((item)=>item.id === id)))
.catch ((error)=> console.log(error))
.finally(()=> setLoading(false))
console.log ('detalle', productDetail)
},[])
*/
return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>} 
    </div>
  )
}

export default ItemDetailCointener