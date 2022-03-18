import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Componente404 from './components/Componente404';
import MenuMobile from './components/MenuMobile';
import NavBar from './components/NavBar';
import './assets/main.css'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <BrowserRouter>
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
        <Route path="/notFound" element={<Componente404 />} />
        <Route path="/*" element={<Navigate to='/' /> }  />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
