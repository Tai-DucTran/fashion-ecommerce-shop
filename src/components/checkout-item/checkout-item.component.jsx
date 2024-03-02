import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selectors';
import {
  addItemToCart,
  clearCartItem,
  minusItemQuantityByOne,
} from '../../store/cart/cart.actions';

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, id, quantity } = cartItem;

  const removeProductOutOfCart = () =>
    dispatch(clearCartItem(cartItems, cartItem));
  const plusItemQuantityByOne = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const minusItemQuantity = () =>
    dispatch(minusItemQuantityByOne(cartItems, cartItem));

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
