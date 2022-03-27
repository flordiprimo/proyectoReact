import React from 'react'
import CartItem from './CartItem'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartList() {

    const {cartList, cantidad, totalCarrito, vaciarCarrito} = useCartContext()
        return (
            <>
                <h2 className='text-left font-bold m-4 text-2xl'>Tu carrito</h2>
                <div className="">
                    {cartList.map((prod) => <CartItem prod={prod} key={prod.id} /> )} 
                </div>
                <div className='m-4 italic'>Productos en el carrito: {cantidad}</div>
                <div className='ml-4 font-bold text-xl'>Total: ${totalCarrito()}</div>
                <div>
                    <button className="ml-4 mr-2 btn btn-gray uppercase" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to='/'><button className="m-2 btn btn-black uppercase">Seguir comprando</button></Link>
                    <button className="m-2 btn btn-pink uppercase">Finalizar compra</button>
                </div>
            </>
          )

}

export default CartList