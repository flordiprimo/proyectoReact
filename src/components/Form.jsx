import React from 'react'

function Form({ createOrder, handleChange, dataForm, gotStock, checkEmail, validate }) {

  return (
    <>
        <form onSubmit={createOrder} className='bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <label className='w-full py-4 font-bold'>Nombre y Apellido:</label>
            <input
                className='w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-pink-500 my-2'
                type='text'
                name='name'
                placeholder='Tu Nombre y Apellido'
                value={dataForm.name}
                onChange={handleChange}
                required
            />
            <label className='w-full py-4 font-bold'>Teléfono:</label>
            <input
                className='w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-pink-500  my-2'
                type='number'
                name='phone'
                placeholder='Sólo números, sin espacios ni guiones'
                value={dataForm.phone}
                onChange={handleChange}
                required
            />
            <label className='w-full py-4 font-bold'>Email:</label>
            <input
                className='w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-pink-500  my-2'
                type='email'
                name='email'
                placeholder='email@algo.com'
                value={dataForm.email}
                onChange={handleChange}
                required
            />
            <label className='w-full py-4 font-bold'>Repetir tu email:</label>
            <input
                className='w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-pink-500  my-2' 
                name='email1'
                placeholder='email@algo.com'
                onChange={checkEmail}
                required
            />

            { validate === false && <>
                                        <button className="btn btn-disabled uppercase mt-6" type="submit" disabled >Finalizar compra</button>
                                        <p className='text-sm text-red-500 italic'>Los emails no coinciden.</p>
                                    </> }
            { validate === true && <button className="btn btn-pink uppercase mt-6" type="submit">Finalizar compra</button>}

            {gotStock === false && <p className='mt-2 p-2 bg-red-200 border border-red-500'>Error al crear la orden: Alguno de los productos no tiene stock. Remover del carrito para continuar la compra</p>}
        </form>
    </>
  )
}

export default Form