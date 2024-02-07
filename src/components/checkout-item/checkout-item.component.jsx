import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';
import CheckoutQuantitySection from '../checkout-quantity-section/checkout-quantity-section.component';

import './checkout-item.style.scss';

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, id } = product;
  const { removeItemOutOfCart } = useContext(CartContext);
  const removeProductOutOfCart = () => removeItemOutOfCart(product);

  return (
    <div className="checkout-item-container">
      <div className="item-detail" key={id}>
        <img src={imageUrl} alt={name} />
        <span className="name">{name}</span>

        <CheckoutQuantitySection product={product} />
        <span className="price">{price}</span>
        <button onClick={removeProductOutOfCart}>Remove</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
