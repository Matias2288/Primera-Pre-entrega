import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { CartContext } from '../contexts/CartContext'
import cart from '../assets/cart.png'

export const CartWidget = () => {
    const {Items} = useContext(CartContext);

    const total = Items.reduce((acc, elem) => acc + elem.quantity, 0);

    return (
   <Link to="/cart" className='Cart'> 
    <img src={cart} alt="Almacen Carlitos" height={25} />
    <span className='TotalCart'>{total}</span>
    
    </Link>
    )
}