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


}}>mas</button>

<button onClick={()=>{
if (contador <10) {
onAdd (contador);
/*setContador(initial);*/
alert ('gracias por su compra de productos' )
}
}}>agregar</button>

</div>

    )
    
};

