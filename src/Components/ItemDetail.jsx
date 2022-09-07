import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({productDetail}) => {
const {name, description, price, stock, img}= productDetail
    return(

<div style={{display:'flex', justifyContent:'center', flexDirection:'column', alingItems:'center'}}>

    <h2> detalle de :{name}</h2>
    <img src={img} alt={name} style={{width:'15rem'}}/>
    <p>{description}</p>
    <p>{price}</p>
   
</div>


    )
}

export default ItemDetail