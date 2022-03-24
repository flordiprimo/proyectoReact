import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import { getFetch } from '../helpers/getFetch'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true)
  const [product,setProduct] = useState({})
  const { detalleId } = useParams()

useEffect(() => {
  getFetch
  .then(resp => setProduct(resp.find(prod => prod.id === detalleId )))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
}, [])
return (
  <>
  { loading ? <Loading />
    :
    <ItemDetail product={product} />}
  </>
)
  
}
