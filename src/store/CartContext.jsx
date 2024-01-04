import {
  createContext,
  useReducer,
} from 'react';

const cartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});

function carReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // ... update the state to add a meal item
        const existingCartItemIndex = 
            state.items.findIdex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return {
            ...state,
            items: updatedItems,
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        // ... remove an item from the state
    }
}

export function CartContextProvider({ children }) {
    const {} = useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider>
            {children           }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
