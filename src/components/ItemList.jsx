import React from 'react'
import Item from './Item'
import '../assets/main.css'

export default function ItemList({prods}) {
  return (
    <>
      <div className="flex flex-wrap">
          {prods.map((prod) => <Item prod={prod} key={prod.id}/> )}
      </div>
    </>

  )
}
