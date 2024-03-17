import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selectors';
import { addItemToCart } from '../../store/cart/cart.actions';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ProductCartContainer, Footer } from './product-card.style';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
