
import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from '../mocks/dataMosck'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

const ItemDetailCointener = () => {

const [productDetail, setProductDetail]= useState({});
const [loading, setLoading]= useState(true);
const {id} = useParams();

useEffect (()=>{
  const coleccionProductos = collection(db, "products")
  const referenciaDoc = doc(coleccionProductos, id)

  getDoc(referenciaDoc)

    .then((result)=>{
      setProductDetail({
        id:result.id,
        ...result.data()
      })
      .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
    })
  
})





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
       {loading ? <p>Cargando1...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailCointener