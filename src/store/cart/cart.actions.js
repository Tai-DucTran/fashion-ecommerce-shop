import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItemHelper(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM, newCartItems);
};
export const clearCartItem = (cartItems, productToRemove) => {
  const newCartItems = removeCartItemHelper(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM, newCartItems);
};
export const minusItemQuantityByOne = (cartItems, productToRemove) => {
  const newCartItems = minusItemQuantityByOneHelper(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM, newCartItems);
};

/// Helper functions

const addCartItemHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItemHelper = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const minusItemQuantityByOneHelper = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return removeCartItemHelper(cartItems, productToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
