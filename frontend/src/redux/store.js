import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import logger from 'redux-logger';


import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './root-reducer';

const middlewares = [];
if (process.env.NODE_ENV !== 'production' && !process.env.STORE_LOG_DISABLE) {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(promise(), thunk, ...middlewares));

export default store;
