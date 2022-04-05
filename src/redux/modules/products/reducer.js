import { searchActionTypes } from './action';

const productInitialState = {
  product: '',
  allProducts: [],
};

export default function reducer(
  state = productInitialState,
  { type, payload }
) {
  switch (type) {
    case searchActionTypes.CHANGE_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case searchActionTypes.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };
    default:
      return state;
  }
}
