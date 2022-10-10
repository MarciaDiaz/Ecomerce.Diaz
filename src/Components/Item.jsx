import React from "react";

import { Link, useNavigate } from 'react-router-dom';

const Item = ({product}) => {

    const{id, img, name, stock}=product
    const navegar = useNavigate()

    return (

<div style={{width:'20rem',margin:'.5rem', justifyContent:'center', alignItems:'center' }}>

         <img src={img} alt={name}/>
        <div >

        
        <p >{product.name}</p>
        <p >${product.price}</p>
        <p >{product.stock}</p>
        

        </div>
        <button onClick={()=>navegar(`/detail/${id}`)}>ver mas</button>
        
</div>   
    )
}

export default Item