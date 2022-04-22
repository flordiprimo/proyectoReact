import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CartListContainer from './CartListContainer'
import { addDoc, collection ,  documentId, getDocs , getFirestore, query, where, writeBatch} from 'firebase/firestore'

export default function Cart() {
  const {emptyCart, totalCart, cartList } = useCartContext()
  const [dataForm, setDataForm] = useState({email: '', name: '', phone: ''})
  const [id, setId] = useState(null)
  const [gotStock,setGotStock]= useState(null)
  const [validate, setValidate] = useState(null)

  const handleChange = (e) => {
    setDataForm( {
      ...dataForm,
      [e.target.name]: e.target.value
  } )
}

const checkEmail = (e) =>{
  const toValidate = dataForm.email
  const forValidating = e.target.value
  if (toValidate === forValidating){
      setValidate(true)
  }else{
    setValidate(false)
  }
}

  const stock = async () =>{
    if (cartList.length > 0){
    const db = getFirestore()
    const queryCollectionItems = collection(db, 'items')
    const idProd = cartList.map(it => it.id)
    const queryCart = await query(queryCollectionItems,
                      where(documentId(), 'in', idProd)
                      )
    const prods = await getDocs(queryCart)
    const validation = await prods.docs.every( product => product.data().stock >= cartList.find(item => item.id === product.id).quantity )
    return validation
  }
}

  async function createOrder(e){
    e.preventDefault()
    const res = await stock()

    if(res === true && validate === true){
      setGotStock(true)
      let order = {}

      order.buyer = dataForm
      order.date = Date()
      order.total = totalCart()

      order.items = cartList.map( cartItem =>{
        const id = cartItem.id
        const name = cartItem.name
        const subtotal = cartItem.subtotal
        const quantity = cartItem.quantity

        return  {id, name, subtotal, quantity}
      })
      const db = getFirestore()
      const queryCollection = collection(db,'orders')
      await addDoc( queryCollection, order)
        .then(({id}) => setId(id))
        .finally(() => emptyCart())
      const queryCollectionItems = collection(db, 'items')
      const batch = writeBatch(db)
      const queryCart = await query(queryCollectionItems,
                              where(documentId(), 'in', cartList.map(it => it.id))
      )
      await getDocs(queryCart)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
      })))

      batch.commit()
    }
    else if (res !== true){
      setGotStock(false)
      setId('fail')
    }else if (validate === false){
      setId('fail')
    } 
    }


  return (
    <>
    <div>
      <CartListContainer createOrder={createOrder} handleChange={handleChange} dataForm={dataForm} id={id} gotStock={gotStock} checkEmail={checkEmail} validate={validate}/>
    </div>
    </>
  )
}
