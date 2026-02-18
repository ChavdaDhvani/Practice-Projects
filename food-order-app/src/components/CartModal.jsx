import { useContext, useEffect, useState } from 'react';
import { currencyFormatter } from '../util/formatting';
import CheckoutFormModal from  './CheckoutFormModal';
import CartContext from '../context/CartContext';
import { useDialog } from '../hooks/useDialog';

export default function CartModal({ open, onClose }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const dialog = useDialog(open);
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items;

  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  useEffect(() => {
    if (cartItems.length === 0 && showCheckout) {
      setShowCheckout(false);
      dialog.current.showModal();
    }
  }, [cartItems, showCheckout]);

  function handleCheckout() {
    dialog.current.close();
    setShowCheckout(true);
  }

  function handleCheckoutClose() {
    setShowCheckout(false);
  }

  return (
    <>
      <CheckoutFormModal open={showCheckout} onClose={handleCheckoutClose} />

      <dialog className=" modal cart" ref={dialog} onClose={onClose}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 && <p>No items in cart!</p>}

        <div className="cart">
          {cartItems.length > 0 && (
            <ul id="cart-items">
              {cartItems.map((item) => {
                return (
                  <li className="cart-item" key={item.id}>
                    <p>
                      {item.name} - {item.quantity} x
                      {currencyFormatter.format(item.price)}
                    </p>

                    <p className="cart-item-actions">
                      <button onClick={() => cartCtx.removeItem(item)}> - </button>
                      <span> {item.quantity}</span>
                      <button onClick={() => cartCtx.addItem(item)}> + </button>
                    </p>
                  </li>
                );
              })}
            </ul>
          )}

          <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        </div>

        <form method="dialog" className="modal-actions">
          <button className="text-button">Close</button>

          {cartItems.length > 0 && (
            <button type="button" className="button" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </form>
      </dialog>
    </>
  );
}
