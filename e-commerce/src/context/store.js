import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      
      const existingProductIndex = state.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingProductIndex !== -1) {
        
        state[existingProductIndex].quantity += action.quantity;
        return [...state];
      } else {
        
        return [...state, { product: action.product, quantity: action.quantity }];
      }

    case 'UPDATE_QUANTITY':
      
      const productIndex = state.findIndex(
        (item) => item.product.id === action.productId
      );

      if (productIndex !== -1) {
        state[productIndex].quantity = action.quantity;
        return [...state];
      }

    case 'REMOVE_FROM_CART':
      
      return state.filter((item) => item.product.id !== action.productId);

    case 'CLEAR_CART':
      
      return [];

      case 'SET_CART':
        
        return action.cart;

    default:
      return state;
  }
};

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
