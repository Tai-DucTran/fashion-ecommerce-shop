import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';

import './checkout-item.style.scss';

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const { removeItemOutOfCart } = useContext(CartContext);

  const removeProductOutOfCart = () => removeItemOutOfCart(product);

  return (
    <div className="checkout-item-container">
      <div className="item-detail">
        <img src={imageUrl} alt={name} />
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <button onClick={removeProductOutOfCart}>Remove</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
