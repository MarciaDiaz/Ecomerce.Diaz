import React from 'react'

const ItemListContainer = (props) => {

    const{saludo, greeting} = props
  return (
    
      <div style={{backgroundColor: "red", marginTop: "5px", border: "solid 2px black"}}>
    <p>{saludo}</p>
    <p>{greeting}</p>

    </div>
  )
}

export default ItemListContainer