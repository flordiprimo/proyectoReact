import React from 'react'
import { Link } from 'react-router-dom'

export default function Component404() {
  return (
    <>    
      <div className='container px-4 mx-auto justify-center flex flex-col'>
          <img src='https://firebasestorage.googleapis.com/v0/b/ecommerce-diprimo.appspot.com/o/404.png?alt=media&token=bdb5f5e4-9147-4b93-ad84-f2ce3398fecb' width='600px' className='place-self-center ml-4'alt="illustration of a man shopping in an online store"/>
          <h2 className='text-center m-4 text-2xl'>¡Uy! Algo salió mal</h2>
          <p className='text-center'>La página que buscás no existe</p>
          <Link to={'/'} className='container px-4 mx-auto flex flex-col justify-center'>
              <button className="bg-black p-2 text-white hover:bg-pink-500 my-4 uppercase w-1/4 place-self-center">Volver al HOME</button>
          </Link>
      </div>
    </>
  )
}
