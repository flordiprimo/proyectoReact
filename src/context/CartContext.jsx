import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item)=>{
        const existingItem = cartList.find( existingItem => existingItem.id == item.id)
        if (existingItem) {
            existingItem.cantidad += item.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, item])
        }
    }

    const vaciarCarrito = () =>{
        setCartList([]);
    }

    const removeFromCart = (item)=>{
        const notFound = cartList.filter(prod => prod !== item )
        setCartList(notFound)
    }

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito,
        removeFromCart,
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider