import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartList from './CartList'
import { CarritoVacio } from './CarritoVacio'
import Form from './Form'

function CartListContainer( {createOrder, handleChange, dataForm, id} ) {

  const {cartList} = useCartContext()

  const condition = cartList.length > 0

  return ( <>
  {condition && <CartList createOrder={createOrder} handleChange={handleChange} dataForm={dataForm}/>}
  {!condition && <CarritoVacio id={id} />}
  
  </>
  )
}

export default CartListContainer