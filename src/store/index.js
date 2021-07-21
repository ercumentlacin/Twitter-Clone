/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { loadUser, saveUser } from 'utils';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger, thunk);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : null;

const enhancer = composeEnhancers(
  middleware
  // other store enhancers if any
);

const persistedUser = loadUser();

const store = createStore(rootReducer, { user: persistedUser }, enhancer);

store.subscribe(() => {
  saveUser(store.getState().user);
});

export default store;
