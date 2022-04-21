import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartList from './CartList'
import { EmptyCart } from './EmptyCart'

function CartListContainer( {createOrder, handleChange, dataForm, id, gotStock, checkEmail, validate} ) {

  const {cartList} = useCartContext()

  const condition = cartList.length > 0

  return ( <>
  {condition && <CartList createOrder={createOrder} handleChange={handleChange} dataForm={dataForm} gotStock={gotStock} id={id} checkEmail={checkEmail} validate={validate}/>}
  {!condition && <EmptyCart id={id} />}
  
  </>
  )
}

export default CartListContainer