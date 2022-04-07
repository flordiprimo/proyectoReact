import React from 'react'
import CartItem from './CartItem'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import Form from './Form'

function CartList( {createOrder, handleChange, dataForm} ) {

    const {cartList, cantidad, totalCarrito, vaciarCarrito } = useCartContext()
        return (
            <>
                <div className='flex'>
                    <div className='w-2/3'>
                    <h2 className='text-left font-bold m-4 text-2xl'>Tu carrito</h2>
                        <div className="">
                            {cartList.map((prod) => <CartItem prod={prod} key={prod.id} /> )} 
                        </div>
                        <div className='m-4 italic'>Productos en el carrito: {cantidad}</div>
                        <div className='ml-4 font-bold text-xl'>Total: ${totalCarrito()}</div>
                        <button className="ml-4 m-2 btn btn-gray uppercase" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link to='/'><button className="m-2 btn btn-black uppercase">Seguir comprando</button></Link>
                    </div>
                    <div className='w-1/3'>
                        <h2 className='text-left font-bold m-4 text-2xl'>Tus datos</h2>
                        <Form createOrder={createOrder} handleChange={handleChange} dataForm={dataForm}  />
                    </div>
                </div>
            </>
          )

}

export default CartList