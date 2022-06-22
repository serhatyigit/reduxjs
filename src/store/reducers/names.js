import {ADD_NAME} from '../actions/names';
import {data} from '../data/data';

const namereducer = (state = data, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {...state, names: [...state.names, action.payload]};
    default:
      return state;
  }
};

export default namereducer;
