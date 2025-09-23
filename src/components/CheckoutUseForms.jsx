import  { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import EmptyCart from './EmptyCart'

const CheckoutUseForms = () => {
    const [orderId, setOrderId]= useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
   const {register, handleSubmit, formState:{errors}, getValues}= useForm()


        const finalizarCompra = (datosForm)=> {
                console.log(datosForm, 'datos del form')
                let order ={
                    comprador:{
                        name: datosForm.name,
                        lastname: datosForm.lastname,
                        email: datosForm.email,
                        address:datosForm.address
                    },
                    compras:cart,
                    total:cartTotal(),
                    date: serverTimestamp()
                }
                const ventas = collection(db, "orders")
             
                addDoc(ventas, order)
                .then((res)=>{
                    cart.forEach((item)=>{
                        const docRef = doc(db, "productos", item.id)
                        getDoc(docRef)
                        .then((dbDoc)=>{
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                        })
                        .catch((error)=> console.log(error))
                    })
                    setOrderId(res.id)
                    clear()
                })
                .catch((error)=> console.log(error))
            

        }

        if(!cart.length && !orderId){
            return <EmptyCart/>
        }
  return (
   <>
   {
    orderId
    ?<div>
         <h2>Realizaste la compra correctamente! 🥳</h2>
        <h3>El id de la compra: {orderId}</h3>
        <Link className='btn btn-dark' to='/'>Volver a comprar</Link>
    </div>
    :
     <div>
        <h1>Complete con sus datos</h1>
        <form onSubmit={handleSubmit(finalizarCompra)}>
            <input className='form-control'  name='name' placeholder='Ingrese su nombre' type="text" {...register("name", {required:true, minLength:3})}  />
            {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo nombre</span>}
             {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre debe contener minimo 3 caracteres</span>}
            <input className='form-control'  name='lastname' placeholder='Ingrese su apellido' type="text" {...register("lastname", {required:true, minLength:2})}/>
              {errors?.lastname?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo apellido</span>}
             {errors?.lastname?.type === "minLength" && <span style={{color:'red'}}>El apellido debe contener minimo 2 caracteres</span>}
            <input className='form-control'  name='address' placeholder='Ingrese su dirección' type="text" {...register("address", {required:true, minLength:10, maxLength:35})}/>
            {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo dirección</span>}
             {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La direccion debe contener minimo 10 caracteres</span>}
              {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La direccion es demasiado larga</span>}
            <input className='form-control'  name='email' placeholder='Ingrese su correo' type="email" {...register("email", {required:true})} />
             {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete este campo</span>}
            <input className='form-control'  name='second-email' placeholder='Repita su correo' type="email"  {...register("secondmail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
            {errors?.secondmail?.type === "required" && <span style={{color:'red'}}>Por favor complete este campo</span>}
            {errors?.secondmail?.type === "equalsMails" && <span style={{color:'red'}}>Los correos no coinciden</span>}
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form>
    </div>
   }
   
   </>
  )
}

export default CheckoutUseForms