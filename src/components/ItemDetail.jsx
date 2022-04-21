import React from 'react'
import '../assets/main.css'
import ItemCount from './ItemCount'
import { useState } from 'react'
import ButtonDetail from './ButtonDetail'
import ButtonOutStock from './ButtonOutStock'
import { useCartContext } from '../context/CartContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


export default function ItemDetail( {product}) {

  const [stock, setStock] = useState(product.stock)

  const {addToCart} = useCartContext()
  const [inputType, setInputType] = useState('count')
  

  async function onAdd(quant , product) {
        const db = getFirestore()
        const queryDoc = doc(db, 'items', product.id )
        const snapDoc = await getDoc(queryDoc)
        
        if (snapDoc.exists() && snapDoc.data().stock >= quant){
            setStock(snapDoc.data().stock)
            handleInter('button')
            const subtotal = product.price * quant
            addToCart( {...product, quantity: quant, subtotal: subtotal} )
        }
    else{
      setStock(snapDoc.data().stock)
      handleInter('noStock')
    }
    
  }
  const handleInter = (state) => {
    setInputType(state)

}

  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-3/4 rounded overflow-hidden shadow-lg m-2 flex flex-row">
          <img className="w-1/2" src={product.photo} alt={product.name} />
          <div className="w-1/2 px-4 py-4 bg-white m-2">
              <div className="font-bold text-3xl mb-1">{product.name}</div>
              <p className="text-black text-base">{product.category}</p>
              <p className="text-black font-bold text-xl">${product.price}</p>
              {stock === 0 ? <ButtonOutStock/>
                                    :
                                    inputType !== 'button' && <ItemCount product={product} initial={1} onAdd={onAdd} />
                                    }
              { inputType === 'button' && <ButtonDetail/> }
              { inputType === 'noStock' && <p>Lo sentimos. No hay stock suficiente para agregar al carrito. El stock es {stock}</p>}
          </div>
      </div>
    </div>
    </>
  )
}
