import React from 'react'
import { Link } from 'react-router-dom'

export const CarritoVacio = () => {
  return (
    <div className='container px-4 mx-auto justify-center flex flex-col'>
        <img src='https://i.postimg.cc/4NZCHrHg/Ecommerce-checkout-laptop-pana.png' width='300px' className='place-self-center ml-4'/>
        <h2 className='text-center m-4 text-2xl'>Tu carrito está vacío</h2>
        <p className='text-center'>Date una vuelta por la tienda para empezar a llenarlo</p>
        <Link to={'/'} className='container px-4 mx-auto flex flex-col justify-center'>
            <button className="bg-black p-2 text-white hover:bg-pink-500 my-4 uppercase w-1/4 place-self-center">ver catálogo</button>
        </Link>
    </div>
  )
}
