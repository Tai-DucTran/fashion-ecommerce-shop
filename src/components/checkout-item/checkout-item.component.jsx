import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, id, quantity } = cartItem;
  const { clearCartItem, addItemToCart, minusItemQuantityByOne } =
    useContext(CartContext);
  const removeProductOutOfCart = () => clearCartItem(cartItem);
  const plusItemQuantityByOne = () => addItemToCart(cartItem);
  const minusItemQuantity = () => minusItemQuantityByOne(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="item-container" key={id}>
        <img src={imageUrl} alt={name} />
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={minusItemQuantity}>
            &#45;
          </div>
          <span className="value"> {quantity}</span>
          <div className="arrow" onClick={plusItemQuantityByOne}>
            &#43;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={removeProductOutOfCart}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
