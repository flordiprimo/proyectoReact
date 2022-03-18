import React from 'react'
import '../assets/main.css'

export default function ItemDetail( {product}) {

  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-3/4 rounded overflow-hidden shadow-lg m-2 flex flex-row">
          <img className="w-1/2" src={product.foto} alt={product.name} />
          <div className="w-1/2 px-4 py-4 bg-white m-2">
              <div className="font-bold text-3xl mb-1">{product.name}</div>
              <p className="text-black text-base">{product.categoria}</p>
              <p className="text-black font-bold text-xl">${product.price}</p>
          </div>
      </div>
    </div>
    </>
  )
}
