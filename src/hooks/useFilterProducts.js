const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");


export const useFilterProducts = ({ wordSearched }) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const [productsToShow, setProductsToShow] = useState([]);
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (allProducts.length === 0) return;
    if (wordSearched === '') {
      setIsMatch(false);
      setProductsToShow(allProducts);
      return;
    };

    const productsFiltered = allProducts.filter((product) => {
      return product.title.toUpperCase().includes(wordSearched.toUpperCase());
    });

    if (productsFiltered.length === 0) setIsMatch(false);
    else setIsMatch(true);

    setProductsToShow(productsFiltered);

  }, [wordSearched, allProducts]);

  return { productsToShow, isMatch };
}