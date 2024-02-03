import Button from '../button/button.component';
import './product-card.style.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" chidren="Add to card"></Button>
    </div>
  );
};

export default ProductCard;
