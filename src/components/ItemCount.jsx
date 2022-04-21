import React from 'react'
import { useState } from 'react'

export default function ItemCount({ product, initial, onAdd }) {
    
    initial = parseInt(initial)
    const stock = parseInt(product.stock)
    const [ count, setCount ] = useState( initial )

    const handleCountAdd = () => {
        if ( count < stock ){
            setCount (count + 1)
        }
        
    }
    const handleCountSubst = () => {
        if ( count > 1) {
            setCount (count - 1)
        }
        
    }

    const addToCart = (e) =>{
        onAdd(count , product)
    }

  return (
    <>
    <div className="mt-4 flex flex-row w-1/2">
        <button className="flex-none bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountSubst}>-</button>
        <div className="p-2 grow text-center">{count}</div>
        <button className="flex-none bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountAdd}>+</button>
    </div>
    
    <button className="bg-black p-2 text-white hover:bg-pink-500 my-2 w-1/2" onClick={addToCart}>Agregar al carrito</button>
</>
  )
}


