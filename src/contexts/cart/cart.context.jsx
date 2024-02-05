import { createContext, useState } from 'react';

const addCartItemHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  // for toggle
  isCartOpen: false,
  setIsCartDropDown: () => {},
  // for adding item
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  // for toggle
  const [isCartOpen, setIsCartDropDown] = useState(false);

  // for adding item
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = productToAdd => {
    setCartItems(addCartItemHelper(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartDropDown, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
