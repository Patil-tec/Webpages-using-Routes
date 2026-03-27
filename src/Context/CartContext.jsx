import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const removeFromCart = () => {
    setCartCount(prev => Math.max(0, prev - 1));
  };

  const resetCart = () => {
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
