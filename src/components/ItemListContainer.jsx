import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import '../assets/main.css'
import { getFetch } from '../helpers/getFetch'

function ItemListContainer({greeting}) {
const [loading, setLoading] = useState(true)
const [prods, setProds] = useState([])

useEffect(()=>{
  getFetch
  .then(resp => setProds(resp))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
},[])
  
console.log(prods)

  return (
    <>
    <div className='text-center py-2 bg-pink-500 text-xl'>{greeting}</div>
    { loading ? <Loading />
      :
      <ItemList prods={prods}/>}
    <ItemCount stock="5" initial="1" onAdd="0" />
    </>
    
  )

  }
export default ItemListContainer