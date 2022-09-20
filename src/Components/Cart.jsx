
import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'


const Cart = () => {

    const {cart, cartTotal, clear} = useCart()
    const navegar = useNavigate()
    

    return (
        <div>
            {
                !cart.length
                ? <div>
                    <h2>carrito vacio</h2>
                    <h4>Ver productos</h4>
                    <button onClick={()=>navegar('/')}>Ir a comprar</button>
                </div>

                //MAPEO EL CARRO
                : <div style={{display: 'flex', flexDirection:'column', alingItems:'center'}}>
                    <h2>Tu carrito:</h2>
                    {
                      cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)  
                    }

                    <span>Total a pagar:${cartTotal()}</span>
                    <button onClick={clear}>vaciar carrito</button>
                    <button>Finalizar Compra</button>
                </div>
            }
        </div>
    )
}

export default Cart