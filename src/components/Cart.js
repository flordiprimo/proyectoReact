import { createHashHistory } from 'history'
import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartListContainer from './CartListContainer'

export default function Cart() {
  const {vaciarCarrito} = useCartContext()

  return (
    <>
    <div>
      <CartListContainer />
    </div>
    </>
  )
}
