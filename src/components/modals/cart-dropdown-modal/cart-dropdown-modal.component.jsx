import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectIsCartOpen,
  selectCartItems,
} from '../../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../../store/cart/cart.actions';

import Button from '../../button/button.component';
import CartItem from '../../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdownModal = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate('/checkout');
  };

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(setIsCartOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return isCartOpen ? (
    <CartDropdownContainer ref={modalRef}>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CartItems>
      <Button chidren="GO TO CHECKOUT" onClick={goToCheckoutHandler}></Button>
    </CartDropdownContainer>
  ) : null;
};

export default CartDropdownModal;
