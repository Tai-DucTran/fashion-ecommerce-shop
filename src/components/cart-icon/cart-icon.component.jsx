import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const onCartClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={onCartClickHandler}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
