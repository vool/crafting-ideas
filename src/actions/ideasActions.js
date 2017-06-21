import * as types from './actionTypes';

export function addIdea(idea) {
  return dispatch({ type: types.ADD_IDEA, idea });
}
