import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => { 
    const { cart, cartQuantity } = useContext(CartContext); 
    console.log(cart, "contexto");

    return(
        <>
        <FaCartShopping fontFamily="1.8rem" />
        <Badge pill bg="danger">{cartQuantity()}</Badge>
        </>
    )
}

export default CartWidget