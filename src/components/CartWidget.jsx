import cart from '../assets/cart.png'

export const CartWidget = () => {
    return (
    <div id='cart-widget'>
    <img src={cart} alt="Cart" className='carrito' />
    <span>42</span>
    </div>
    )
}