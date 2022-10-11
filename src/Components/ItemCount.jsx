import React from 'react'

const ItemCount = ({initial, stock, onAdd, count, setCount}) => {
  
    const restar = () => {
        if(count > initial){
            setCount(count-1)
        }
    }

    const sumar=()=>{
        if(count<stock){
            setCount(count + 1)
        }
    }

  return (
    <>
    <div>
        
        
        <button  onClick={restar}>-</button>
        <span  >{count}</span>
        <button  onClick={sumar}>+</button>
    </div>
        <button onClick={onAdd}>comprar</button>
    </>
  )
}

export default ItemCount

