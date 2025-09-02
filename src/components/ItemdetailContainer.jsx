import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemdetailContainer = () => {
 const[detalle, setDetalle] = useState({})
 const {id} = useParams()
    console.log(id, 'useParams')

 useEffect(()=> {
    setCargando(true)
    constprodCollection = collection(db, "productos")
    const docRef = doc(prodCollection, id)
    getDoc(docRef)
    .then((res) => setDetalle({id: res.id, ...res.data()}))
    .catch((error) => console.log(error))
    .finally(() => setCargando(false))

}, [id])
}
export default ItemDetailContainer
