import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ProductCartContainer, Footer } from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        chidren="Add to card"
        onClick={addProductToCart}
      ></Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
