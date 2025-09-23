import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom" 
import Swal from 'sweetalert2' 

const ItemDetail = ({detalle}) => {
const {addItem, itemQuantity}= useContext(CartContext)
const [purchase, setPuchase]=useState(false)

  const onAdd = (cantidad)=>{
    addItem(detalle, cantidad)
    setPuchase(true)
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste ${detalle.name} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1500
    })
  }
const stockActualizado = detalle.stock - itemQuantity(detalle.id)
  return (
    <div>
        <h2 style={{ margin: '30px'}} >Detalle de: {detalle.name} </h2>
        <img alt={detalle.name} src={detalle.image} style={{ width: '25rem',  float: 'left',  margin: '20px' , borderRadius: '15px' }}/>
        <p>{detalle.description}</p>
        <p>Stock:{ stockActualizado} unidades disponibles</p>
        <p>Precio: ${detalle.price},00</p>
       {purchase 
       ? <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
          <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
       </div>
       : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail
