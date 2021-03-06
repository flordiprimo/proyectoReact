
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Component404 from './components/Component404';
import MenuMobile from './components/MenuMobile';
import NavBar from './components/NavBar';
import CartContextProvider from './context/CartContext';
import { getFirestoreApp } from './firebase/config';
import './assets/main.css'

function App() {
  getFirestoreApp()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen);
                          }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CartContextProvider>
        <div>
          <NavBar toggleOpen={toggleOpen} />
          {isOpen && <MenuMobile  toggleOpen={toggleOpen} />}
          <Routes>
            <Route path="/" element={
                                      <ItemListContainer
                                          greeting='Bienvenidxs a Friki'
                                      />
                                    }
            />
            <Route path="/categoria/:id" element={
                                      <ItemListContainer
                                          greeting='Bienvenidxs a Friki'
                                      />
                                    }
            />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/proyectoReact" element={<Navigate to='/' /> }  />
            <Route path="/notFound" element={<Component404 />} />
            <Route path="/*" element={<Navigate to='/notFound' /> }  />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
