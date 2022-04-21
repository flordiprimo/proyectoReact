import React from 'react'
import CartItem from './CartItem'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import Form from './Form'

function CartList( {createOrder, handleChange, dataForm, gotStock, id, checkEmail, validate} ) {

    const {cartList, quantity, totalCart, emptyCart } = useCartContext()
        return (
            <>
                <div className='flex'>
                    <div className='w-2/3'>
                        <h2 className='text-left font-bold m-4 text-2xl'>Tu carrito</h2>
                        <div className="">
                            {cartList.map((prod) => <CartItem prod={prod} key={prod.id} id={id} /> )} 
                        </div>
                        <div className='m-4 italic'>Productos en el carrito: {quantity}</div>
                        <div className='ml-4 font-bold text-xl'>Total: ${totalCart()}</div>
                        <button className="ml-4 m-2 btn btn-gray uppercase" onClick={emptyCart}>Vaciar Carrito</button>
                        <Link to='/'><button className="m-2 btn btn-black uppercase">Seguir comprando</button></Link>
                    </div>
                    <div className='w-1/3'>
                        <h2 className='text-left font-bold m-4 text-2xl'>Tus datos</h2>
                        <Form createOrder={createOrder} handleChange={handleChange} dataForm={dataForm} gotStock={gotStock} checkEmail={checkEmail} validate={validate}/>
                    </div>
                </div>
            </>
          )

}

export default CartList