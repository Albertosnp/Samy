export const filterProductsPerAuthor = ({ allProducts = [], wordSearched = '' }) => {
  if (!Array.isArray(allProducts)) return [];
  if (typeof wordSearched !== 'string') return [];

  const filteredProductsPerTitle = allProducts?.filter((product) => {
    return product.author.toUpperCase().includes(wordSearched.toUpperCase());
  });

  return filteredProductsPerTitle;
}