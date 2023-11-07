import React, { createContext, useContext, useReducer } from 'react';

export const AuthContext = createContext();

// Define your authentication reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      // Handle user sign-in and store the token
      localStorage.setItem('token', action.token);
      return { ...state, user: action.user, token: action.token };
    case 'SIGN_OUT':
      // Handle user sign-out and clear the token
      localStorage.removeItem('token');
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Load the token from local storage when the app starts
  const storedToken = localStorage.getItem('token');
  const [authState, dispatch] = useReducer(authReducer, {
    user: null,
    token: storedToken, // Initialize the token from local storage
  });

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
