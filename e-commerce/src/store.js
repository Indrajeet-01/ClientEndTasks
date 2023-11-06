import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();

// Define your cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding a product to the cart
      const existingProductIndex = state.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        state[existingProductIndex].quantity += action.quantity;
        return [...state];
      } else {
        // If the product is not in the cart, add it
        return [...state, { product: action.product, quantity: action.quantity }];
      }

    case 'UPDATE_QUANTITY':
      // Handle updating the quantity of a product in the cart
      const productIndex = state.findIndex(
        (item) => item.product.id === action.productId
      );

      if (productIndex !== -1) {
        state[productIndex].quantity = action.quantity;
        return [...state];
      }

    case 'REMOVE_FROM_CART':
      // Handle removing a product from the cart
      return state.filter((item) => item.product.id !== action.productId);

    case 'CLEAR_CART':
      // Handle clearing the entire cart
      return [];

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
