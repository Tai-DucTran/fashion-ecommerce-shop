import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const onCartClickHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={onCartClickHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
