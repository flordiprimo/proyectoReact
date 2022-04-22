import React from 'react'
import Item from './Item'
import '../assets/main.css'

export default function ItemList({prods}) {
  return (
    <>
      <div className="flex flex-wrap mx-6 w-[95%]">
          {prods.map((prod) => <Item prod={prod} key={prod.id}/> )}
      </div>
    </>

  )
}
