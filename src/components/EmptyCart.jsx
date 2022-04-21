import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = ({id}) => {

  const condition = id !== null && id.length > 4

  
  return (
    <>
      {condition === true && <h2 className='text-center mt-5 text-lg  text-green-800' ><span className='p-2 bg-green-200 border border-green-500 rounded-lg'><span className='text-bold'>¡Gracias!</span> El id de tu compra es: {id}</span></h2>}
      <div className='container px-4 mx-auto justify-center flex flex-col'>
          <img src='https://i.postimg.cc/4NZCHrHg/Ecommerce-checkout-laptop-pana.png' width='300px' className='place-self-center ml-4'alt="illustration of a man shopping in an online store"/>
          <h2 className='text-center m-4 text-2xl'>Tu carrito está vacío</h2>
          <p className='text-center'>Date una vuelta por la tienda para empezar a llenarlo</p>
          <Link to={'/'} className='container px-4 mx-auto flex flex-col justify-center'>
              <button className="bg-black p-2 text-white hover:bg-pink-500 my-4 uppercase w-1/4 place-self-center">ver catálogo</button>
          </Link>
      </div>
    </>
  )
}
