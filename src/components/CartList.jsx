import React from 'react'
import CartItem from './CartItem'
import {useCartContext} from '../context/CartContext'

function CartList() {

    const {cartList, cantidad} = useCartContext()

    if (cartList != []){
        return (
            <>
                <div className="">
                    {cartList.map((prod) => <CartItem prod={prod} key={prod.id} /> )} 
                </div>
                <div className='m-4'>Productos en el carrito: {cantidad}</div>
            </>
          )
    }
}

export default CartList