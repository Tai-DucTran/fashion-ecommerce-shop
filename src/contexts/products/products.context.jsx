import { createContext, useContext, useEffect, useState } from 'react';

import ProductsData from '../../data/products.data.json';

const product = {
  id: '',
  name: '',
  imageUrl: '',
  price: '',
};

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductsData);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
