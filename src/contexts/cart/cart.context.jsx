import { createContext, useState, useEffect } from 'react';

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

const removeCartItemHelper = (cartItems, productToRemove) => {
  return cartItems.filter(item => item.id !== productToRemove.id);
};

export const CartContext = createContext({
  // for toggle
  isCartOpen: false,
  setIsCartOpen: () => {},
  // for adding item
  cartItems: [],
  addItemToCart: () => {},
  // for toggle number item count
  cartItemsCount: 0,
});

export const CartProvider = ({ children }) => {
  // for toggle
  const [isCartOpen, setIsCartOpen] = useState(false);

  // for adding item
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = productToAdd => {
    setCartItems(addCartItemHelper(cartItems, productToAdd));
  };
  const removeItemOutOfCart = productToRemove => {
    setCartItems(removeCartItemHelper(cartItems, productToRemove));
  };

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    const newCartItemsCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemsCount(newCartItemsCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsCount,
    removeItemOutOfCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
