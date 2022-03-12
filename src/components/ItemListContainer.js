import '../assets/main.css'
import React from 'react'
import ItemCount from './ItemCount'


function ItemListContainer({greeting}) {
  return (
    <>
    <div className='text-center py-2 bg-pink-500 text-xl'>{greeting}</div>
    <ItemCount stock="5" initial="1" onAdd="0" />
    </>
    
  )
}

export default ItemListContainer