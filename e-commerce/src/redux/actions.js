// src/actions/productActions.js
import { SELECT_PRODUCT } from "./constants";

export const selectProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  };
};

// src/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART } from "./constants";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const updateQuantity = (product, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { product, quantity },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
