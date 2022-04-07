import { createHashHistory } from 'history'
import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CartListContainer from './CartListContainer'
import { addDoc, collection , doc, documentId, getDocs , getFirestore, query, updateDoc, where, writeBatch} from 'firebase/firestore'

export default function Cart() {
  const {vaciarCarrito, cantidad, totalCarrito, cartList } = useCartContext()
  const [dataForm, setDataForm] = useState({email: '', name: '', phone: ''})
  const [id, setId] = useState(null)

  const handleChange = (e) => {
    console.log(e.target.name)
    setDataForm( {
      ...dataForm,
      [e.target.name]: e.target.value
  } )
}

  async function createOrder(e){
    e.preventDefault()
    console.log(e)
    console.log(dataForm)
    // nuevo objeto de orden
    let order = {}

    order.buyer = dataForm
    order.date = Date()
    order.total = totalCarrito()

    order.items = cartList.map( cartItem =>{
      const id = cartItem.id
      const name = cartItem.name
      const subtotal = cartItem.subtotal
      const quantity = cartItem.cantidad

      return  {id, name, subtotal, quantity}

    })
  
    const db = getFirestore()
    const queryCollection = collection(db,'orders')
    await addDoc( queryCollection, order)
    .then(({id}) => setId(id))
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())

    // actualizar stock (en proceso)
    const queryCollectionItems = collection(db, 'items')
    const queryUpdate = await query(
      queryCollectionItems,
      where(documentId(), 'in', cartList.map(it => it.id))
    )
    const batch = writeBatch(db)
    await getDocs(queryUpdate)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    })))
    .finally(()=> console.log("actualizado"))

    batch.commit()
    
    //antes de agregar a la orden habría que hacer una validación, consultar si existen las cantidades. Todavia me falta eso!

  }


  return (
    <>
    <div>
      <CartListContainer createOrder={createOrder} handleChange={handleChange} dataForm={dataForm} id={id} />
    </div>
    </>
  )
}
