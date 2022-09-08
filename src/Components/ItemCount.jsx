import React, { useState, } from "react";

export default function ItemCount ({stock, initial, onAdd}){

    let [contador, setContador] = useState (initial);
  

const restar = () =>{
    if(contador > initial){
        setContador(contador-1)
    }
}

const sumar = () => {
    if(contador<stock){
        setContador(contador+1)
    }
}


return (

    <>
    <div>
        <button onClick={sumar}>mas</button>
        <span>{contador}</span>
        <button onClick={restar}>menos</button>
    </div>
    <button onClick={onAdd}>comprar</button>
    
    
    </>
)
    
};

