import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const isNotProductionEnv = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [isNotProductionEnv && logger, sagaMiddleware].filter(
  Boolean
);

const composedEnhancer =
  (isNotProductionEnv &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistedStore = persistStore(store);
