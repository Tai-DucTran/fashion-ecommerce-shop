import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';
import './checkout-quantitly-section.style.scss';

const CheckoutQuantitySection = ({ product }) => {
  const { addItemToCart, minusItemQuantityByOne } = useContext(CartContext);
  const plusItemQuantityByOne = () => addItemToCart(product);
  const minusItemQuantity = () => minusItemQuantityByOne(product);

  const { quantity, id } = product;
  return (
    <div className="checkout-quantity-section-container" key={id}>
      <button onClick={minusItemQuantity}>Minus</button>
      <span className="quantity">{quantity}</span>
      <button onClick={plusItemQuantityByOne}>Plus</button>
    </div>
  );
};

export default CheckoutQuantitySection;
