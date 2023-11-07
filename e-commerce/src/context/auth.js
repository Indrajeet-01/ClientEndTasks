import React, { createContext, useContext, useReducer } from 'react';

export const AuthContext = createContext();

// Define your authentication reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      // Handle user sign-in
      return { ...state, user: action.user };
    case 'SIGN_OUT':
      // Handle user sign-out
      return { ...state, user: null };
    default:
      return state;
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, { user: null });

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
