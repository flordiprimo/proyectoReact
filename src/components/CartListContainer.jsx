import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartList from './CartList'
import { CarritoVacio } from './CarritoVacio'

function CartListContainer() {

  const {cartList} = useCartContext()

  const condition = cartList.length > 0

  return ( <>
  {condition && <CartList />}
  {!condition && <CarritoVacio />}
  
  </>
  )
}

export default CartListContainer