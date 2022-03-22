import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemCount({ product, stock, initial, onAdd }) {
    
    initial = parseInt(initial)
    stock = parseInt(stock)

    const [ count, setCount ] = useState( initial )
    const [ stockProducto , setStockProducto] = useState (stock)

    const handleCountSumar = () => {
        if ( count < stockProducto ){
            setCount (count + 1)
        }
        
    }
    const handleCountRestar = () => {
        if ( count > 1) {
            setCount (count - 1)
        }
        
    }
    const addToCart = (e) => {
        console.log(e)
        if (count <= stockProducto ){
            setStockProducto(stockProducto - count)
            console.log(product.name)
            console.log(`${count} agregado al carrito`)
            console.log(`Quedan ${stockProducto - count} en stock`)
            onAdd(count)
        }
        if (count > stockProducto) {
            console.log(`No hay stock suficiente`)
        }
    }

  return (
    <>
    <div className="mt-4 flex flex-row w-1/2">
        <button className="flex-none bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountRestar}>-</button>
        <div className="p-2 grow text-center">{count}</div>
        <button className="flex-none bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountSumar}>+</button>
    </div>
    
    <button className="bg-black p-2 text-white hover:bg-pink-500 my-2 w-1/2" onClick={addToCart}>Agregar al carrito</button>
</>
  )
}


