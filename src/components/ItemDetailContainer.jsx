import React from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true)
  const [product,setProduct] = useState({})
  const { detalleId } = useParams()

useEffect(()=>{
  const db = getFirestore()
  const queryDoc = doc(db, 'items', detalleId )
  getDoc(queryDoc)
  .then(resp => setProduct({id: resp.id, ... resp.data()}))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
},[])

return (
  <>
  { loading ? <Loading />
    :
    <ItemDetail product={product} />}
  </>
)
  
}
