import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/main.css'
import ButtonOutStock from './ButtonOutStock'

export default function Item({prod}) {

  return (
    <div className="w-80 rounded overflow-hidden shadow-lg m-2">
      <img className="w-full" src={prod.photo} alt={prod.name} />
      <div className="px-4 py-4">
        <div className="font-bold text-l mb-1">{prod.name}</div>
        <p className="text-black text-base">{prod.category}</p>
        <p className="text-black font-bold text-base">${prod.price}</p>
        <Link to={`../detalle/${prod.id}`}><button className="mt-2 btn btn-pink uppercase">Más info</button></Link>
        {prod.stock === 0 && <ButtonOutStock/>}
      </div>
    </div>
  )
}
