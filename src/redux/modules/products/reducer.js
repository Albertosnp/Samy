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

    case searchActionTypes.SET_LIKE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.map((product) => {
          if (product.id !== payload.id) return product;

          let likes_count = product.likes_count;
          if (product.liked) likes_count = --product.likes_count;
          else likes_count = ++product.likes_count ;

          return {
            ...product,
            liked: !product.liked,
            likes_count,
          };
        }),
      };

    default:
      return state;
  }
}
