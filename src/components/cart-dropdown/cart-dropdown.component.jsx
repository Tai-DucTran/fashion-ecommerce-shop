import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
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
  );
};

export default CartDropdown;
