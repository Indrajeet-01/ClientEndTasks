// src/reducers/index.js
import { combineReducers } from "redux";
import { SELECT_PRODUCT } from "./constants";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART } from "./constants";

const initialState = {
  cart: [],
};

const productReducer = (state = { selectedProduct: null }, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case REMOVE_FROM_CART:
        const updatedCart = state.cart.filter((product, index) => index !== action.payload);
        return {
          ...state,
          cart: updatedCart,
        };
      case UPDATE_QUANTITY:
        const updatedCartWithQuantity = state.cart.map((product, index) =>
          index === action.payload.index
            ? { ...product, quantity: action.payload.quantity }
            : product
        );
        return {
          ...state,
          cart: updatedCartWithQuantity,
        };
      case CLEAR_CART:
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
