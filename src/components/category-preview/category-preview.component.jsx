import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  TitleLink,
  Previews,
} from './category-preview.style';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <Previews>
        {products
          .filter((_, idx) => idx < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Previews>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
