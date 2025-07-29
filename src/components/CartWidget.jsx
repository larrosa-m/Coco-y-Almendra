import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return(
        <>

        <FaCartShopping fontFamily="1.8rem" />
        <Badge pill bg="danger">1</Badge>

        </>
    )
}

export default CartWidget