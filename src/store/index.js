/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadUser, saveUser } from 'utils';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger, thunk);

const composeEnhancers = composeWithDevTools(middleware);

const persistedUser = loadUser();

const store = createStore(
  rootReducer,
  { user: persistedUser },
  composeEnhancers
);

store.subscribe(() => {
  saveUser(store.getState().user);
});

export default store;
