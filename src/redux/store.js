import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import combinedReducer from './reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  return combinedReducer(state, action);
};

const store = createStore(reducer, bindMiddleware([thunkMiddleware]));

export default store;
