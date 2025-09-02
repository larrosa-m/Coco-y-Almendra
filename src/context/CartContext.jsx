import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = () => {
    const[cart, setCart] = useState([])

//Borrar carrito
const clearCart = () => {
    setCart([])
}
//Agregar al carrito
const addItem = (item, qty) => {
    console.log(item, qty)
    setCart([...cart, {...item, qty}])
}
//Eliminar 
const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id))
}
//true o false 
const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}

    return (
        <CartContext.Provider value={{cart, clear, addItem}}>
            {Children}
         </CartContext.Provider>
    )

}