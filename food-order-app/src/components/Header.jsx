import logo from '../assets/foodlogo.png';
import CartModal from './CartModal';
import Button from '../UI/Button';
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Header() {
    
  const [modal, setModal] = useState(false);
  const cartCtx = useContext(CartContext);

  function handleModalClose() {
    setModal(false);
  }

  return (
    <>
      <CartModal open={modal} onClose={handleModalClose} />

      <header id="main-header">
        <div id="title">
          <img src={logo} alt="Food logo" />
          <h1>ReactFood</h1>
        </div>

        <Button textOnly onClick={() => setModal(true)}>
          Cart ({cartCtx.items.length})
        </Button>

      </header>
    </>
  );
}
