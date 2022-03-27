import React from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import '../assets/main.css'
import { useParams } from 'react-router-dom'


function ItemListContainer({greeting}) {
const [loading, setLoading] = useState(true)
const [prods, setProds] = useState([])
const {id} = useParams()

//para traer TODOS los productos de firestore 
useEffect(()=>{
  if (id){const db = getFirestore()
  const queryCollection = collection(db, 'items')
  getDocs(queryCollection)
  .then(resp => setProds( resp.docs.map(producto => ({id: producto.id, ... producto.data()})).filter(prod => prod.categoria === id )))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
  }
  else {
    const db = getFirestore()
  const queryCollection = collection(db, 'items')
  getDocs(queryCollection)
  .then(resp => setProds( resp.docs.map(producto => ({id: producto.id, ... producto.data()}))))
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