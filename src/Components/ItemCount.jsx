import React, { useState, } from "react";

export default function ItemCount ({stock, initial, onAdd}){

    let [contador, setContador] = useState (initial);
console.log ('contador')
    return(
<div>
<button onClick={()=>{
if (contador > initial){

    setContador(contador -1);
}

}}>menos</button>

<h3>{contador}</h3>

<button onClick={()=>{
if(contador < stock){

    setContador(contador+1);
}
else if (contador == 10){

    alert ('no hay mas stock');
}

}}>mas</button>

<button onClick={()=>{
if (contador ) {
onAdd (contador);
setContador(initial);
alert ('gracias por su compra de productos' )
}
}}>agregar</button>

</div>

    )
    
};

