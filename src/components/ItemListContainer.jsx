import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import '../assets/main.css'
import { getFetch } from '../helpers/getFetch'
import ItemDetailContainer from './ItemDetailContainer'
import { useParams } from 'react-router-dom'

function ItemListContainer({greeting}) {
const [loading, setLoading] = useState(true)
const [prods, setProds] = useState([])
const {id} = useParams()

useEffect(()=>{
  if (id) {
    getFetch
    .then(resp => setProds(resp.filter(prod => prod.categoria === id )))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  } else {
  getFetch
  .then(resp => setProds(resp))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
  }
},[id])


  return (
    <>
    <div className='text-center py-2 bg-pink-500 text-xl'>{greeting}</div>
    { loading ? <Loading />
      :
      <ItemList prods={prods} />}
    </>
    
  )

  }
export default ItemListContainer