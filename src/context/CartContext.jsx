import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const addToCart = (item)=>{
        const existingItem = cartList.find( existingItem => existingItem.id == item.id)
        if (existingItem) {
            existingItem.cantidad += item.cantidad
            setCartList([...cartList])
            sumarProductos(item)
        } else {
            setCartList([...cartList, item])
            sumarProductos(item)
        }
    }

    const vaciarCarrito = () =>{
        setCartList([]);
        setCantidad(0)
    }

    const removeFromCart = (item)=>{
        const notFound = cartList.filter(prod => prod !== item )
        setCartList(notFound)
        restarProductos(item)
    }
    const sumarProductos = (item) =>{
        setCantidad( cantidad + item.cantidad)
    }
    const restarProductos = (item) =>{
        setCantidad( cantidad - item.cantidad)
    }
  return (
    <CartContext.Provider value={{
        cartList,
        cantidad,
        addToCart,
        vaciarCarrito,
        removeFromCart,
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider