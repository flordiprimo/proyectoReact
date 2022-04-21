import React from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ButtonOutStock() {
  const { detalleId } = useParams()

  return (
    <>
        <button className="bg-gray-500 p-2 text-white disabled m-2 w-1/2">SIN STOCK</button>
        { detalleId && <>
          <Link to='/'>
            <button className="bg-black p-2 text-white hover:bg-pink-500 m-2 w-1/2">VER CATALOGO</button>
          </Link>
        </>}
      
    </>
  )
}
