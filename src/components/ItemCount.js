import React from 'react'
import { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {
    
    initial = parseInt(initial)
    stock = parseInt(stock)

    const [ count, setCount ] = useState( initial )

    const handleCountSumar = () => {
        if ( count < stock ){
            setCount (count + 1)
        }
        
    }
    const handleCountRestar = () => {
        if ( count > 1) {
            setCount (count - 1)
        }
        
    }

    const addToCart = () => {
        if (count <= stock ){
            onAdd = count
            console.log(`Agrega al carrito ${onAdd}`)
            stock = stock - onAdd
            console.log(`Me quedan ${stock} en stock`)
        }
        if (count > stock) {
            console.log(`No hay stock suficiente`)
        }
    }
  return (
      <>
      <div>Producto</div> 
      <div className="flex flex-row">
        <button className="bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountRestar}>-</button>
        <div className="p-2">{count}</div>
        <button className="bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountSumar}>+</button>
      </div>
      <button className="bg-black p-2 text-white hover:bg-pink-500 my-2" onClick={addToCart}>Agregar al carrito</button>
      </>
    
  )
}
