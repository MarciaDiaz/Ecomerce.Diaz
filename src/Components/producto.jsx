import React from "react";

export default function Producto ({item}){
    console.log(item)


    return(


<div style={{backgroundColor: "green", marginTop: "5px", border: "solid 2px black"}}>

<p>id: {item.id}</p>
<p>{item.name}</p>
<p>precio ${item.price}</p>
<br />

</div>








    );
}