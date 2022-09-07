import React from "react";

const Item = ({product}) => {

    const{img, name, description, price, stock}=product

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
        <button className="btn btn-primary">ver mas</button>
</div>   
    )
}

export default Item