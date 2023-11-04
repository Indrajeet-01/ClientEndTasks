// ProductsContext.js
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  cart: [],
};

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsContextReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>{children}</ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const productsContextReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.title !== action.payload.title),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.title === action.payload.product.title
            ? { ...product, quantity: parseInt(action.payload.quantity, 10) }
            : product
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
