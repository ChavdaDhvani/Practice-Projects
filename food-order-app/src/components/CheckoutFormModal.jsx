import { useContext, useEffect, useRef, useState } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import CartContext from "../context/CartContext";

export default function CheckoutModal({ open, onClose }) {

    const cartCtx = useContext(CartContext);
    const foodcart = cartCtx.items;

    const cartTotal = foodcart.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const dialog = useRef();

    useEffect(() => {
        if (!dialog.current) return;

        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    async function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitting(true);
        setError(null);

        const form = event.target;
        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: {
                        items: foodcart,
                        customer: customerData
                    }
                })
            });

            if(!response.ok){
                throw new Error('Failded to submit order.')
            }

            form.reset();
            cartCtx.clearCart();
            onClose();

            
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }

        setIsSubmitting(false);
    }

    return (
        <>
            <dialog className="modal" ref={dialog} onClose={onClose}>
                <form onSubmit={handleSubmit}>
                    <h2>Checkout</h2>
                    <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                   {error && <p className="error-message">{error}</p>}

                    <div className="control">
                        <label htmlFor="name">Full Name</label>
                        <input name="name" type="text" id="name" required></input>
                    </div>

                    <div className="control">
                        <label htmlFor="email">E-Mail Address</label>
                        <input name="email" type="email" id="email" required></input>
                    </div>

                    <div className="control">
                        <label htmlFor="street">Street</label>
                        <input name="street" type="text" id="street" required></input>
                    </div>

                    <div className="control-row">
                        <div className="control">
                            <label htmlFor="postal-code">Postal Code</label>
                            <input name="postal-code" type="text" id="postal-code" required></input>
                        </div>

                        <div className="control">
                            <label htmlFor="city">City</label>
                            <input name="city" type="text" id="city" required></input>
                        </div>
                    </div>

                    <p className="modal-actions">
                        <Button type="button" textOnly onClick={onClose}>Close</Button>
                        <Button disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Order'}
                    </Button>
                    </p>

                </form>
            </dialog>
        </>
    )
}