import { ThemeContext } from '@emotion/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from '../mocks/dataMosck'
import ItemDetail from './ItemDetail'

const ItemDetailCointener = () => {

const [productDetail, setProductDetail]= useState({})
const [loading, setLoading]= useState(true)

useEffect (()=>{

data
.then((res)=> setProductDetail(res.find((item)=>item.id ==='02')))
.catch ((error)=> console.log(error))
.finally(()=> setLoading(false))
console.log ('detalle', productDetail)
},[])

return (
    <div>
       {loading ? <p>Cargando1...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailCointener