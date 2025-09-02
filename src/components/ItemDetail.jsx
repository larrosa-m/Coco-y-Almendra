import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({detalle}) => {
  const {addItem, cart} = useContext(CartContext)
  const onAdd = (qty) => {
    console.log("Cantidad agregada: ", qty)
    addItem(detalle, qty)
  }
  console.log(cart, "carrito")
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <h1>Detalle de: {detalle.name}</h1>
        <img alt={detalle.name} src={detalle.image}/>
        <p>{detalle.description}</p>
        <p>Stock: {detalle.stock}</p>
         <p>Precio: ${detalle.price},00</p>
         
    </div>
  )
}

export default ItemDetail
