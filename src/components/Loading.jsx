import React from 'react'
import '../assets/custom.css'
import '../assets/main.css'

export default function loading() {
  return (
    <>
        <div className='flex flex-col justify-center h-screen'>
            <div className="vinyl place-self-center"></div>
            <h2 className="text-center mt-4 italic text-xl">Cargando...</h2>
        </div>
        
    </>
    
  )
}
