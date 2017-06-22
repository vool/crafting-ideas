import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ideasReducer(state = initialState.ideas, action) {
  switch (action.type) {
    case types.ADD_IDEA:
      return [...state, Object.assign({}, action.idea)];

    case types.GET_IDEAS:
      return action.ideas;

    default:
      return state;
  }
}
