import React from 'react'
import { useState, useEffect } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loading from './Loading'
import '../assets/main.css'

function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true)
  const [prods, setProds] = useState([])
  const {id} = useParams()

  useEffect(()=>{

            const db = getFirestore()
            const queryCollection = id
              ?
                query(collection(db, 'items'),
                where('category', '==', id)
                )    
              
              :
                collection(db, 'items')     
                getDocs(queryCollection)
                
                .then(resp => setProds( resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
                .finally(()=> setLoading(false))
  },[id])

    return (
      <>
      <div className='text-center py-2 bg-pink-500 text-xl uppercase'>
        {id ? <h1>{id}</h1>
            : 
              <h1>{greeting}</h1>}
      </div>
      { loading ? <Loading />
                :
                  <ItemList prods={prods} />}
      </>
      
    )

  }
export default ItemListContainer