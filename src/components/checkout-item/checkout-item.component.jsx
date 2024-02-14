import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';

import {
  CheckoutItemContainer,
  ItemContainer,
  NameOrPrice,
  Quantity,
  ArrowIcon,
  Value,
  RemoveButton,
} from './checkout-item.style';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, id, quantity } = cartItem;
  const { clearCartItem, addItemToCart, minusItemQuantityByOne } =
    useContext(CartContext);
  const removeProductOutOfCart = () => clearCartItem(cartItem);
  const plusItemQuantityByOne = () => addItemToCart(cartItem);
  const minusItemQuantity = () => minusItemQuantityByOne(cartItem);

  return (
    <CheckoutItemContainer>
      <ItemContainer key={id}>
        <img src={imageUrl} alt={name} />
        <NameOrPrice>{name}</NameOrPrice>
        <Quantity>
          <ArrowIcon onClick={minusItemQuantity}>&#45;</ArrowIcon>
          <Value> {quantity}</Value>
          <ArrowIcon onClick={plusItemQuantityByOne}>&#43;</ArrowIcon>
        </Quantity>
        <NameOrPrice>{price}</NameOrPrice>
        <RemoveButton onClick={removeProductOutOfCart}>&#10005;</RemoveButton>
      </ItemContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
