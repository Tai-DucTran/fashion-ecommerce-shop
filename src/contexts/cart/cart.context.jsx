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

const minusItemQuantityByOneHelper = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return removeCartItemHelper(cartItems, productToRemove);
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
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
  clearCartItem: () => {},
  minusItemQuantityByOne: () => {},
  cartTotal: 0,
  setcartTotal: () => {},
});

export const CartProvider = ({ children }) => {
  // for toggle
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  // for adding item

  const addItemToCart = productToAdd => {
    setCartItems(addCartItemHelper(cartItems, productToAdd));
  };
  const clearCartItem = productToRemove => {
    setCartItems(removeCartItemHelper(cartItems, productToRemove));
  };
  const minusItemQuantityByOne = productToRemove => {
    setCartItems(minusItemQuantityByOneHelper(cartItems, productToRemove));
  };

  useEffect(() => {
    const newCartItemsCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemsCount(newCartItemsCount);
  }, [cartItems]);

  useEffect(() => {
    const newcartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setcartTotal(newcartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsCount,
    clearCartItem,
    minusItemQuantityByOne,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
