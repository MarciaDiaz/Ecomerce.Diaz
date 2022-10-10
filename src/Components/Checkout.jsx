import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../firebase/firebase'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { InputLabel, OutlinedInput } from '@mui/material'






const Checkout = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loader, setLoader] = useState(false)
    const {cart, cartTotal, clear}= useCart()
    const navigate = useNavigate()
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }
 
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
           setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }
        
    }
    if(loader){
        return <p>Cargading...</p>
    }
  return (
    <div>
       {!orderId 
       ?<div>
       <h2>Checkout</h2>
        <h4>Por favor complete todos los campos</h4>
        <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>

            
            <div >
                
                


<FormControl>
<label  >Nombre Completo</label>
 <OutlinedInput type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}></OutlinedInput>
 
</FormControl>

<FormControl>
<label  >Numero de telefono</label>
 <OutlinedInput type="number" placeholder='15-12345678' name="phone" onChange={datosComprador}></OutlinedInput>  
 </FormControl>


 <FormControl>
<label  >Correo Electronico</label>
 <OutlinedInput type="email" placeholder='pepe@gmail.com' name="email" onChange={datosComprador}></OutlinedInput>  
 </FormControl>

            </div>
            
            
            
            <Button variant="outlined" color='success' type='submit'>
            Finalizar Comprar
                </Button>;
            {mensaje && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
       
        </form>
       

       </div>
       :
       <div>
        <h2>Muchas gracias por su compra!</h2>
        <h4>Su orden es: {orderId}</h4>
        <button onClick={()=> navigate('/')}>Volver</button>
        
       </div>}
    </div>
  )
}

export default Checkout