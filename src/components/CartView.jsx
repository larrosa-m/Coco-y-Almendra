import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const {cart, clear, removeItem, cartTotal}= useContext(CartContext)
 const preConfirm = ()=>{
  Swal.fire({
    title:'¿Vaciar el carrito?',
    showDenyButton:true,
    denyButtonText:'Si',
    confirmButtonText:'No',
 }).then((result)=>{
  if(result.isConfirmed){
    clear()
  }
 })
 }
  return (
    <div>
      <h1>Tu carrito</h1>
      <div>
      {cart.map((compra)=>(
        <div key={compra.id}  style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
          <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
          <span>{compra.name}</span>
          <span>${compra.price},00</span>
          <span>unidades: {compra.quantity}</span>
          <span>precio final: ${compra.price * compra.quantity},00</span>
          <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
        </div>
      ))}
      </div>
      <span>Total a pagar: ${cartTotal()}, 00</span>
      <div>
        <button className='btn btn-danger' onClick={preConfirm}>Borrar Carrito</button>
        <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
        </div>
    </div>
  )
}

export default CartView