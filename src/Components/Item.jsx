import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Item = ({product}) => {

    const{id, img, name, description, price, stock}=product
    const navegar = useNavigate()

    return (

<div className="card" style={{width:'20rem',margin:'.5rem'}}>

        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">

        <p className="card-text">{product.id}</p>
        <p className="card-text">{product.name}</p>
        <p className="card-text">${product.price}</p>
        <p className="card-text">{product.stock}</p>
        <p className="card-text">{product.description}</p>

        </div>
        <button onClick={()=>navegar(`/detail/${id}`)}>ver mas</button>
        
</div>   
    )
}

export default Item