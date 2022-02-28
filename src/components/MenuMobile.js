import '../assets/main.css'
import React from 'react'

function MenuMobile(toggleOpen) {
  return (
    <div className='grid grid-rows-5 text-center items-center bg-pink-500' onClick={toggleOpen}>
        <a href="#" className='text-white p-4 hover:font-bold'>HOME</a>
        <a href="#" className='text-white p-4 hover:font-bold'>CATÁLOGO</a>
        <a href="#" className='text-white p-4 hover:font-bold'>CÓMO COMPRAR</a>
        <a href="#" className='text-white p-4 hover:font-bold'>CONTACTO</a>
        <a href="#" className='bg-pink-600 text-white p-4 hover:font-bold'>VER CARRITO</a>
    </div>
  )
}

export default MenuMobile