import { filterProducts } from 'utils/filterProducts';
const { useState, useEffect } = require('react');

export const useFilterProducts = ({ wordSearched, allProducts }) => {
  const [productsToShow, setProductsToShow] = useState([]);
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (allProducts.length === 0) return;
    if (wordSearched === '') {
      setIsMatch(false);
      setProductsToShow(allProducts);
      return;
    }

    const productsFiltered = filterProducts({ allProducts, wordSearched });

    if (productsFiltered.length === 0) setIsMatch(false);
    else setIsMatch(true);

    setProductsToShow(productsFiltered);
  }, [wordSearched, allProducts]);

  return { productsToShow, isMatch };
};
