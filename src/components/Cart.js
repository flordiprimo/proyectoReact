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
    <div>
      <button className="m-4 btn btn-pink uppercase" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
    </>
  )
}
