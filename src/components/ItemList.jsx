import React from 'react'
import Item from './Item'

export default function ItemList({prods}) {
  return (
    <>
        {prods.map((prod) => <Item prod={prod} /> )}
    </>

  )
}
