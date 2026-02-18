import { createContext, useReducer } from 'react';


const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { }
});

function cartReducer(state, action) {

    if (action.type === 'ADD_ITEM') {

        const existingItem = state.find(item => item.id === action.payload.id);

        if (existingItem) {
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        } else {
            return [...state, { ...action.payload, quantity: 1 }];
        }
    }

    if (action.type === "REMOVE_ITEM") {

        const existingCartItemIndex = state.findIndex(
                item => item.id === action.payload.id
            );

            const existingCartItem = state[existingCartItemIndex];

            if (existingCartItem.quantity === 1) {
                return state.filter(item => item.id !== action.payload.id);
            }

            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

    }

    if (action.type === 'CLEAR_CART') {
        return [];
    }

    return state;

}

export function CartContextProvider({ children }) {

    const [cartState, dispatch] = useReducer(cartReducer, []);

    function addItem(meal) {
        dispatch({ type: 'ADD_ITEM', payload: meal });
    }

    function removeItem(meal) {
        dispatch({ type: 'REMOVE_ITEM', payload: meal });
    }

    function clearCart() {
        dispatch({ type: 'CLEAR_CART' });
    }

    const value = {
        items: cartState,
        addItem,
        removeItem,
        clearCart
    };

    return (
        <CartContext value={value}>
            {children}
        </CartContext>
    );
}

export default CartContext;