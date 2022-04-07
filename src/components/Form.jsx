import React, { useState } from 'react'

function Form({ createOrder, handleChange, dataForm}) {

  return (
    <>
        <form onSubmit={createOrder} className='mr-3 p-3 border border-black'>
            <label className='w-full my-2'>Nombre y Apellido:</label>
            <input
                className='w-full p-2 border border-black'
                type='text'
                name='name'
                placeholder='Tu Nombre y Apellido'
                value={dataForm.name}
                onChange={handleChange}
                required
            />
            <label className='w-full my-2'>Teléfono:</label>
            <input
                className='w-full p-2 border border-black'
                type='number'
                name='phone'
                placeholder='(Sin espacios ni guiones)'
                value={dataForm.phone}
                onChange={handleChange}
                required
            />
            <label className='w-full my-2'>Email:</label>
            <input
                className='w-full p-2 border border-black'
                type='email'
                name='email'
                placeholder='email@algo.com'
                value={dataForm.email}
                onChange={handleChange}
                required
            />
            <label className='w-full my-2'>Repetir tu email:</label>
            <input
                className='w-full p-2 border border-black'
                type='email'
                name='email1'
                placeholder='email@algo.com'
                onChange={handleChange}
                required
                //función para validar el mail
            />
            <button className="btn btn-pink uppercase mt-6" type="submit">Finalizar compra</button>
        </form>
    </>
  )
}

export default Form