export const searchActionTypes = {
  CHANGE_PRODUCT: 'CHANGE_PRODUCT',
};

export const setProductSearched = ( product ) => ({
  type: searchActionTypes.CHANGE_PRODUCT,
  payload: product,
});
