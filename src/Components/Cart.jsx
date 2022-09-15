import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)
    console.log('carrito', cart)

    return (
        <div>Aca habra un carrito</div>
    )
}

export default Cart