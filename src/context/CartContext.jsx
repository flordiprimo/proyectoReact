import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
const cantidadLocalStorage = JSON.parse(localStorage.getItem('cantidad')) || 0

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState(carritoLocalStorage)
    const [cantidad, setCantidad] = useState(cantidadLocalStorage)

    const addToCart = (item)=>{
        const existingItem = cartList.find(prod => prod.id === item.id)
        if (existingItem) {
          console.log(existingItem)
            existingItem.cantidad += item.cantidad
            existingItem.subtotal += item.subtotal
            setCartList(cartList)
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

    const totalCarrito = ()=>{
        return cartList.reduce((acc,value) => acc + value.subtotal, 0)
    }

useEffect(() => {
  localStorage.setItem('carrito', JSON.stringify(cartList))
  localStorage.setItem('cantidad', JSON.stringify(cantidad))
},[cartList, cantidad])


  return (
    <CartContext.Provider value={{
        cartList,
        cantidad,
        carritoLocalStorage,
        cantidadLocalStorage,
        addToCart,
        vaciarCarrito,
        removeFromCart,
        totalCarrito
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider