import React from 'react'
import { Link } from 'react-router-dom'


export default function BotonDetail() {
  return (
    <>
                <Link to='/carrito'>
                <button className="bg-black p-2 text-white hover:bg-pink-500 m-2 w-1/2">VER CARRITO</button>
                </Link>
                <Link to='/'>
                <button className="bg-black p-2 text-white hover:bg-pink-500 m-2 w-1/2">VER CATALOGO</button>
                </Link>
            </>
  )
}
