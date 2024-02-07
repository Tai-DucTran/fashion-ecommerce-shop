import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/checkout';
    setIsCartOpen(!isCartOpen);
    navigate(path);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button chidren="GO TO CHECKOUT" onClick={routeChange}></Button>
    </div>
  );
};

export default CartDropdown;
