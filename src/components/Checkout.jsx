import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    const [validMail, setValidMail]= useState('')
    const [orderId, setOrderId]= useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const buyerData = (e) =>{
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )

    }


        const finalizarCompra = (e)=> {
            e.preventDefault()
            if(!buyer.name || !buyer.lastname || !buyer.address || !buyer.email ){
                alert('Por favor complete todos los campos')
            }else if (buyer.email !== validMail){
                alert('Los correos no coinciden')
            }else{
                let order ={
                    comprador:buyer,
                    compras:cart,
                    total:cartTotal(),
                    date: serverTimestamp()
                }
                const ventas = collection(db, "orders")
                addDoc(ventas, order)
                .then((res)=>{
                    setOrderId(res.id)
                    clear()
                })
                .catch((error)=> console.log(error))
            }

        }

  return (
   <>
   {
    orderId
    ?<div>
         <h2>Compra exitosa</h2>
        <h3>El id de la compra: {orderId}</h3>
        <Link className='btn btn-dark' to='/'>Volver a comprar</Link>
    </div>
    :
     <div>
        <h1>Complete con sus datos</h1>
        <form onSubmit={finalizarCompra}>
            <input className='form-control'  name='name' placeholder='Ingrese su nombre' type="text" onChange={buyerData} />
            <input className='form-control'  name='lastname' placeholder='Ingrese su apellido' type="text" onChange={buyerData}/>
            <input className='form-control'  name='address' placeholder='Calle falsa 1234' type="text" onChange={buyerData}/>
            <input className='form-control'  name='email' placeholder='Ingrese su correo' type="email" onChange={buyerData} />
            <input className='form-control'  name='second-email' placeholder='Repita su correo' type="email" onChange={(e)=> setValidMail(e.target.value)} />
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form>
    </div>
   }
   
   </>
  )
}

export default Checkout