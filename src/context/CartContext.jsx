import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item)=>{
        if (
            cartList.find( existingItem => existingItem.id == item.id)
        ) {
            const existingItem = cartList.find( existingItem => existingItem.id == item.id)
            existingItem.cantidad += item.cantidad
        } else {
            setCartList([...cartList, item])
        }
    }

    const vaciarCarrito = () =>{
        setCartList([]);
    }


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito,
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider