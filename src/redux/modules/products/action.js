export const searchActionTypes = {
  CHANGE_PRODUCT: 'CHANGE_PRODUCT',
  SET_ALL_PRODUCTS: 'SET_ALL_PRODUCTS',
};

export const setProductSearched = (product = '') => ({
  type: searchActionTypes.CHANGE_PRODUCT,
  payload: product,
});

export const setAllProducts = (products = []) => ({
  type: searchActionTypes.SET_ALL_PRODUCTS,
  payload: products,
});
