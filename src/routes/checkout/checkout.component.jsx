import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.style.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-items">
        {cartItems.map(item => (
          <CheckoutItem product={item}></CheckoutItem>
        ))}
      </div>
    </div>
  );
};
export default Checkout;
