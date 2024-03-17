import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};
const isNotProductionEnv = process.env.NODE_ENV !== 'production';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [isNotProductionEnv && logger, thunk].filter(Boolean);

const composedEnhancer =
  (isNotProductionEnv &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistedStore = persistStore(store);
