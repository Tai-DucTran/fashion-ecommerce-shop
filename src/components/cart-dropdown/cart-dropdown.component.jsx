import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart/cart.context';
import { goToPageRouteHelper } from '../../routes/route.utils';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
    goToPageRouteHelper(navigate, '/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your card is empty</span>
        )}
      </div>
      <Button chidren="GO TO CHECKOUT" onClick={goToCheckoutHandler}></Button>
    </div>
  );
};

export default CartDropdown;
