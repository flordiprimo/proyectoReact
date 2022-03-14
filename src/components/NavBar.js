import React from 'react'
import Logo from '../images/logofriki.png'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../assets/main.css'

function NavBar({toggleOpen}) {
  return (
    <nav className='flex justify-between items-center h-20 bg-neutral-900 relative shadow-sm pl-4'>
      <div>
        <img src={Logo} />
      </div>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggleOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </div>
      <div className='pr-4 hidden md:block'>
        <div className='flex space-x-5'>
          <NavLink to='/' className='text-white px-4 hover:text-pink-500'>HOME</NavLink>
        <a href="#" className='text-white px-4 hover:text-pink-500'>CATÁLOGO</a>
        <a href="#" className='text-white px-4 hover:text-pink-500'>CÓMO COMPRAR</a>
        <a href="#" className='text-white px-4 hover:text-pink-500'>CONTACTO</a>
        <NavLink to='cart'> 
          <CartWidget />
        </NavLink>
        
        </div>
      </div>
    </nav>
  )
}

export default NavBar;