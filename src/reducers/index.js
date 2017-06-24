import { combineReducers } from 'redux';
import client from '../apolloClient';
import ideas from './ideasReducer';

const rootReducer = combineReducers({
  apollo: client.reducer(),
  ideas
});

export default rootReducer;
