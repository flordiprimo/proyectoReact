import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import '../assets/main.css'
import {RiDeleteBin5Fill} from "react-icons/ri";

function CartItem( {prod, id} ) {
  const [stock, setStock] = useState(prod.stock)
  const {removeFromCart, addToCart, substFromCart} = useCartContext()
  const onRemove = (e) =>{
    removeFromCart(prod)
  }

  const handleCountAdd = (e) => {
    if ( prod.quantity < stock ){
        const add = 1
        const subtotal = prod.price * add
        onAdd(prod, add, subtotal)
    }
    
}
const handleCountSubst = (e) => {
    if ( prod.quantity > 1) {
      const remove = 1
      const subtotal = prod.price * remove
      substFromCart({...prod, quantity: remove, subtotal})
      
    }
    
}

async function onAdd(prod, add, subtotal) {
  const db = getFirestore()
  const queryDoc = doc(db, 'items', prod.id )
  const snapDoc = await getDoc(queryDoc)
  
  if (snapDoc.exists() && snapDoc.data().stock >= add){
      setStock(snapDoc.data().stock)
      addToCart( {...prod, quantity: add, subtotal: subtotal} )
  }
  else{
      setStock(snapDoc.data().stock)
  }

}

useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'items', prod.id )
    getDoc(queryDoc)
    .then( resp => setStock(resp.data().stock))
  }
, [id])
  

  return (
    <div className='flex flex-row m-4 border border-1 border-gray200'>
        <img className='w-1/6' src={prod.photo} alt={prod.name}/> 
        <div className='w-4/6 px-4 py-4'>
          <div className="font-bold text-l mb-1">{prod.name}</div>
          <p className="text-black text-base italic">{prod.category}</p>
          <p className="text-black text-base font-bold">Cantidad:</p>
          <div className="mt-2 flex flex-row w-1/2">
            <button className="flex-none bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountSubst}>-</button>
            <div className="p-2 grow text-center">{prod.quantity}</div>
            <button className="flex-none bg-black p-2 text-white hover:bg-pink-500" onClick={handleCountAdd}>+</button>
          </div>
          {stock < prod.quantity && <p className='italic text-red-500'>El stock disponible es: {stock}</p>}
          {stock == prod.quantity && <p className='pt-2 italic text-green-500'>Máxima cantidad agregada</p>}
          <p className="mt-2 text-black text-base">Precio: ${prod.price}</p>
        </div>
        <div className='w-1/6  px-4 py-4'>
          <p className="text-black text-base">Subtotal: ${prod.subtotal}</p>
          <button  className="bg-black rounded p-2 text-white hover:bg-pink-500 my-2" onClick={onRemove}><RiDeleteBin5Fill/></button>
        </div>
    </div>
  )
}

export default CartItem