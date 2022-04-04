import { searchActionTypes } from './action';

const productInitialState = {
  product: "",
};

export default function reducer(state = productInitialState, { type, payload }) {
  switch (type) {
    case searchActionTypes.CHANGE_PRODUCT:
    return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
}
