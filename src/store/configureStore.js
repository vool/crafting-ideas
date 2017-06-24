import { createStore, applyMiddleware } from 'redux';
import client from '../apolloClient';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(client.middleware())
  );
}
