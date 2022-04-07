import { deleteDuplicateItemsInArray } from 'utils/deleteDuplicate';
import { filterProductsPerAuthor } from 'utils/filterProductsPerAuthor';
import { filterProductsPerTitle } from 'utils/filterProductsPerTitle';
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

    const productsFilteredPerTitle = filterProductsPerTitle({ allProducts, wordSearched });
    const productsFilteredPerAuthor = filterProductsPerAuthor({ allProducts, wordSearched });
    const productsFiltered = deleteDuplicateItemsInArray([...productsFilteredPerTitle, ...productsFilteredPerAuthor]);


    if (productsFiltered.length === 0) setIsMatch(false);
    else setIsMatch(true);

    setProductsToShow(productsFiltered);
  }, [wordSearched, allProducts]);

  return { productsToShow, isMatch };
};
