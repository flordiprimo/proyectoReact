import '../assets/main.css'
import React from 'react'


function ItemListContainer({greeting}) {
  return (
    <div className='text-center py-2 bg-pink-500 text-xl'>{greeting}</div>
  )
}

export default ItemListContainer