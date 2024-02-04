import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart/cart.context';
import './cart-icon.style.scss';

const CartIcon = () => {
  const { isCartDropDown, setIsCartDropDown } = useContext(CartContext);
  const onCartClickHandler = () => {
    setIsCartDropDown(!isCartDropDown);
  };
  return (
    <div className="cart-icon-container" onClick={onCartClickHandler}>
      <ShoppingIcon />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
