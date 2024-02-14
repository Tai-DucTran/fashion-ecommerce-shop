import {
  CartItemContainer,
  ItemDetails,
  NameAndPrice,
} from './cart-item.style';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <NameAndPrice>{name}</NameAndPrice>
        <NameAndPrice>
          {quantity} x ${price}
        </NameAndPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
