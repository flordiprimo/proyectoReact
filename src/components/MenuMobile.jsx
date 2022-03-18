import '../assets/main.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

function MenuMobile(toggleOpen) {
  return (
    <div className='grid grid-rows-5 text-center items-center bg-pink-500' onClick={toggleOpen}>
        <NavLink to='/' className='text-white p-4 hover:font-bold'>HOME</NavLink>
        <NavLink to='categoria/vinilos' className='text-white p-4 hover:font-bold'>VINILOS</NavLink>
        <NavLink to='categoria/cds' className='text-white p-4 hover:font-bold'>CDs</NavLink>
        <NavLink to='comocomprar' className='text-white p-4 hover:font-bold'>COMO COMPRAR</NavLink>
        <NavLink to='contacto' className='text-white p-4 hover:font-bold'>CONTACTO</NavLink>
        <NavLink to='carrito' className='bg-pink-600 text-white p-4 hover:font-bold'>VER CARRITO</NavLink>
    </div>
  )
}

export default MenuMobile