import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart/cart.context';
import './cart-icon.style.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const onCartClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={onCartClickHandler}>
      <ShoppingIcon />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
