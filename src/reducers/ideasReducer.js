import { ADD_IDEA } from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.ideas, action) {
  switch (action.type) {
    case ADD_IDEA:
      return [...state].concat(action.idea);

    default:
      return state;
  }
}
