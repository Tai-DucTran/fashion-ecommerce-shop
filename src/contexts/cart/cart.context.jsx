import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartDropDown: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartDropDown] = useState(false);
  const value = { isCartOpen, setIsCartDropDown };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
