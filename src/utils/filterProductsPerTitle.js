export const filterProductsPerTitle = ({ allProducts = [], wordSearched = '' }) => {
  if (!Array.isArray(allProducts)) return [];
  if (typeof wordSearched !== 'string') return [];

  const filteredProducts = allProducts?.filter((product) => {
    return product.title.toUpperCase().includes(wordSearched.toUpperCase());
  });

  return filteredProducts;
}