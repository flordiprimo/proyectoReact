import React from 'react'
import '../assets/main.css'

export default function Item({prod}) {
    console.log(prod)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
  <img className="w-full" src={prod.foto} alt={prod.name} />
  <div className="px-4 py-4">
    <div className="font-bold text-xl mb-1">{prod.name}</div>
    <p className="text-black text-base">{prod.categoria}</p>
    <p className="text-black font-bold text-base">${prod.price}</p>
    <button className="mt-2 btn btn-pink uppercase">Más info</button>
  </div>
</div>
  )
}
