import { useState } from 'react';
import './assets/main.css'
import ItemListContainer from './components/ItemListContainer';
import MenuMobile from './components/MenuMobile';
import NavBar from './components/NavBar';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <NavBar toggleOpen={toggleOpen} />
      {isOpen && <MenuMobile  toggleOpen={toggleOpen} />}
      <ItemListContainer greeting='Bienvenidxs a Friki'/>
    </div>
  );
}

export default App;
