import * as types from './actionTypes';

export function addIdea(idea) {
  idea.owner = {
    name: 'Nikita Voloboev',
    username: 'nikita'
  };
  return { type: types.ADD_IDEA, idea };
}

export function getIdeas(ideas) {
  return { type: types.GET_IDEAS, ideas };
}
