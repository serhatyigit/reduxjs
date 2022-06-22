export const ADD_NAME = 'ADD_NAME';

export const addName = newName => {
  return {type: ADD_NAME, payload: newName};
};
