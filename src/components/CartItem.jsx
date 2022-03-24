import React from 'react'
import '../assets/main.css'
import { useCartContext } from '../context/CartContext'

function CartItem( {prod} ) {
  const {removeFromCart} = useCartContext()
  const onRemove = (e) =>{
    removeFromCart(prod)
  }

    const subtotal = prod.price * prod.cantidad
  return (
    <div className='flex flex-row m-4 border border-1 border-gray200'>
        <img className='w-1/6' src={prod.foto} alt={prod.name}/> 
        <div className='w-4/6 px-4 py-4'>
        <div className="font-bold text-l mb-1">{prod.name}</div>
        <p className="text-black text-base">{prod.categoria}</p>
        <p className="text-black text-base">Cantidad: {prod.cantidad}</p>
        <p className="text-black text-base">Precio: ${prod.price}</p>
        </div>
        <div className='w-1/6  px-4 py-4'>
        <p className="text-black text-base">${subtotal}</p>
        <button  className="bg-black rounded p-2 text-white hover:bg-pink-500 my-2" onClick={onRemove}>Borrar</button>
        </div>
    </div>
  )
}

export default CartItem