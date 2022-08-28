import React from 'react'

const ItemListContainer = (props) => {

    const{saludo, greeting, stock, initial, onAdd} = props
  return (
    
    <div style={{backgroundColor: "red", marginTop: "5px", border: "solid 2px black"}}>
    <p>{saludo}</p>
    <p>{greeting}</p>

    
<p>{stock}</p>
<p>{initial}</p>
<p>{onAdd}</p>
    </div>
  )
}

export default ItemListContainer