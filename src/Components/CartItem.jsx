import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({compra}) => {

    const {removeItem}= useCart()

    return (
        <div  style={{display:'flex', justifyContent: 'space-between', alignItems: 'end', padding:'2rem'}}>
                            <img src={compra.img} alt={compra.name} />
                            <span>{compra.name}</span>
                            <span>{compra.quantity}</span>
                            <span>${compra.price}</span>
                            
                            <button onClick={()=>removeItem(compra.id)}>borrar</button>
                        </div>
    )
}

export default CartItem