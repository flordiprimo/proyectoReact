import React from 'react'
import Logo from '../images/logofriki.png'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../assets/main.css'

function NavBar({toggleOpen}) {
  return (
    <nav className='flex justify-between items-center h-20 bg-neutral-900 relative shadow-sm pl-4'>
      <div>
        <NavLink to='/' className={({ isActive }) => isActive ? 'py-4' : 'py-4'}><img src={Logo} /></NavLink>
      </div>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggleOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </div>
      <div className='pr-4 hidden md:block'>
        <div className='flex space-x-5'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'notActive'}>HOME</NavLink>
          <NavLink to='categoria/vinilos' className={({ isActive }) => isActive ? 'active' : 'notActive'}>VINILOS</NavLink>
          <NavLink to='categoria/cds' className={({ isActive }) => isActive ? 'active' : 'notActive'}>CDs</NavLink>
          <NavLink to='comocomprar' className={({ isActive }) => isActive ? 'active' : 'notActive'}>CÓMO COMPRAR</NavLink>
          <NavLink to='contacto' className={({ isActive }) => isActive ? 'active' : 'notActive'}>CONTACTO</NavLink>
        <NavLink to='carrito' className={({ isActive }) => isActive ? 'active' : 'notActive'}> 
          <CartWidget />
        </NavLink>
        
        </div>
      </div>
    </nav>
  )
}

export default NavBar;