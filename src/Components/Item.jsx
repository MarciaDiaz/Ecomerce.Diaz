import React from "react";

const Item = ({product}) => {

    return (

        <div>
        <p>{product.id}</p>
        <p>{product.nombre}</p>
        <p>{product.precio}</p>
        </div>
        
    )
}

export default Item