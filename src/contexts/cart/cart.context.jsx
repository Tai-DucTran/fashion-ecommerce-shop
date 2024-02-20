import { createContext, useReducer } from 'react';

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
  // for UPDATE item
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
  clearCartItem: () => {},
  minusItemQuantityByOne: () => {},
  cartTotal: 0,
  setcartTotal: () => {},
});

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  console.log('dispatched');
  console.log('payload', payload);

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.UPDATE_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartItemsCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = boolean =>
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: boolean,
    });

  const updateCartItemsReducer = newCartItems => {
    const newCartItemsCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.UPDATE_CART_ITEM,
      payload: {
        cartItems: newCartItems,
        cartItemsCount: newCartItemsCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = productToAdd => {
    const newCartItems = addCartItemHelper(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const clearCartItem = productToRemove => {
    const newCartItems = removeCartItemHelper(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const minusItemQuantityByOne = productToRemove => {
    const newCartItems = minusItemQuantityByOneHelper(
      cartItems,
      productToRemove
    );
    updateCartItemsReducer(newCartItems);
  };

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
