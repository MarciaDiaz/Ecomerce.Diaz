import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import Cart from "./Cart";


const ItemDetail = ({productDetail}) => {

    let [contador, setContador] = useState (1);
    const [compra, setCompra] = useState (false);
    const {name, description, price, stock, img}= productDetail
    const navegar=useNavigate()

const onAdd = () => {

    console.log(`compraste ${contador} del producto ${name}`)
    setCompra(true)
}

    return(

<div style={{display:'flex', justifyContent:'center', flexDirection:'column', alingItems:'center'}}>

    <h2> detalle de :{name}</h2>
    <img src={img} alt={name} style={{width:'15rem'}}/>
    <p>{description}</p>
    <p>{price}</p>
    {!compra
    ? <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>
    : 
    <div style={{display:'flex', justifyContent: 'space-around', alingItems: 'center'}}>
    
        <button onClick={()=>navegar('/Cart')}>Ir al carrito</button>
        <button onClick={()=>navegar('/')} >Seguir comprando</button>
    </div>}
</div>


    )
}

export default ItemDetail