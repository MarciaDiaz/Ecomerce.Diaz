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
        <button className='btn btn-success' onClick={sumar}>+</button>
        <span  className='btn btn-light'>{count}</span>
        <button  className='btn btn-danger'onClick={restar}>-</button>
    </div>
        <button  className='btn btn-primary m-3'onClick={onAdd}>comprar</button>
    </>
  )
}

export default ItemCount

