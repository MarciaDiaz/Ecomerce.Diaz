



    import React, { useState, useEffect } from "react";

    const ItemCount = ({stock, initial, onAdd})=>{
    
     const [contador,setContador] = useState (initial);
    
    const sumar = () => {
    
        if (contador<stock) {
    
            setContador(contador +1);
        }
    };
    
    const restar = () => {
    
        if (contador>0) {
    
            setContador(contador -1);
        }
    };
        
        return(
    <div>
          <button onClick={restar}>restar</button> 
          <button onClick={sumar}>sumar</button>
          <button onClick={onAdd}>Comprar</button>
    
    </div>      
    
        )
    };
    
    export default ItemCount;


    /////////////////////////////////////////////////////////
    //MONTAJE
useEffect (()=>{


},[]);

//TODAS LAS VECES
useEffect (()=>{


});

//DEPENDE QUE BOTON
useEffect (()=>{

console.log('contador2')
},[contador2]);



    
    
