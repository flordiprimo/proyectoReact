import { collection, documentId, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const cartLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
const quantityLocalStorage = JSON.parse(localStorage.getItem('quantity')) || 0

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState(cartLocalStorage)
    const [quantity, setQuantity] = useState(quantityLocalStorage)

    const addToCart = (item)=>{
        const existingItem = cartList.find(prod => prod.id === item.id)
        if (existingItem) {
            existingItem.quantity += item.quantity
            existingItem.subtotal += item.subtotal
            setCartList(cartList)
            addProducts(item)

        } else {
            setCartList([...cartList, item])
            addProducts(item)

        }
    }

    const substFromCart = (item)=>{
        const existingItem = cartList.find(prod => prod.id === item.id)
        if (existingItem) {
            existingItem.quantity -= item.quantity
            existingItem.subtotal -= item.subtotal
            setCartList(cartList)
            substProducts(item)
    }
}

    const emptyCart = () =>{
        setCartList([]);
        setQuantity(0)
    }
    const removeFromCart = (item)=>{
        const notFound = cartList.filter(prod => prod !== item )
        setCartList(notFound)
        substProducts(item)
    }
    const addProducts = (item) =>{
        setQuantity( quantity + item.quantity)
    }
    const substProducts = (item) =>{
        setQuantity( quantity - item.quantity)
    }
    const totalCart = ()=>{
        return cartList.reduce((acc,value) => acc + value.subtotal, 0)
    }


useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartList))
  localStorage.setItem('quantity', JSON.stringify(quantity))
},[cartList, quantity])


  return (
    <CartContext.Provider value={{
        cartList,
        quantity,
        cartLocalStorage,
        quantityLocalStorage,
        addToCart,
        emptyCart,
        removeFromCart,
        totalCart,
        substFromCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider