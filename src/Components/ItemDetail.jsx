import React from "react";

import ItemCount from "./ItemCount";


const ItemDetail = ({productDetail}) => {

    let totalStock = 0;

const {name, description, price, stock, img}= productDetail
const onAdd = (cantidad) => {

    console.log(`compraste ${cantidad} del producto ${name}`)
}

    return(

<div style={{display:'flex', justifyContent:'center', flexDirection:'column', alingItems:'center'}}>

    <h2> detalle de :{name}</h2>
    <img src={img} alt={name} style={{width:'15rem'}}/>
    <p>{description}</p>
    <p>{price}</p>
    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
   
</div>


    )
}

export default ItemDetail