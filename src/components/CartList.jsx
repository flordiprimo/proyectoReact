import React from 'react'
import CartItem from './CartItem'
import {useCartContext} from '../context/CartContext'

function CartList() {

    const {cartList} = useCartContext()

    if (cartList != []){
        return (
            <>
                <div className="">
                    {cartList.map((prod) => <CartItem prod={prod} key={prod.id} /> )} 
                </div>
            </>
          )
    }
}

export default CartList