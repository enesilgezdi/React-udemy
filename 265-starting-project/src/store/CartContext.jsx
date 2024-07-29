import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        //... updaate the state to add a meal item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 })
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        // ... remove an item from the state
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items]

        if (existingCartItem.quantity === 1) {
            const updatedItems = [...state.items];
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem =
            {
                ...existingCartItem, quantity: existingCartItem.quantity - 1,

            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }

    if (action.type === 'CLEAR-CART') {
        return { ...state, items: [] }
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item })
    }
    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id })
    }

    function clearCart() {
        dispatchCartAction({ type: 'CLEAR_CART' })
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    };



    return <CartContextProvider value={cartContext}>{children}</CartContextProvider>
}

export default CartContext;