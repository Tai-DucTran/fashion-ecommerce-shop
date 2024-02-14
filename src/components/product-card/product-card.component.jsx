import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.style.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        chidren="Add to card"
        onClick={addProductToCart}
      ></Button>
    </div>
  );
};

export default ProductCard;
