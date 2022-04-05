import { setLikeProductAPI } from "services/setLikeProductAPI.service";

export const searchActionTypes = {
  CHANGE_PRODUCT: 'CHANGE_PRODUCT',
  SET_ALL_PRODUCTS: 'SET_ALL_PRODUCTS',
  SET_LIKE_PRODUCT: 'SET_LIKE_PRODUCT',
};

export const setProductSearched = (product = '') => ({
  type: searchActionTypes.CHANGE_PRODUCT,
  payload: product,
});

export const setAllProducts = (products = []) => ({
  type: searchActionTypes.SET_ALL_PRODUCTS,
  payload: products,
});

export const setLikeProduct = ({ id = 0 }) => {
  return async (dispatch) => {
    dispatch({
      type: searchActionTypes.SET_LIKE_PRODUCT,
      payload: {
        id,
      },
    });
    try {
      const response = await setLikeProductAPI({ id });
      if (response) console.log("Like modificado");
      
    } catch (error) {
      console.log(error);
    }
  };
};
