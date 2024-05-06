import { Link } from 'react-router-dom'
import cart from '../assets/cart.png'

export const CartWidget = () => {
    return (
   <Link to="/cart">
    <img src={cart} alt="Almacen Carlitos" height={25} />
    <span>42</span>
    </Link>
    )
}