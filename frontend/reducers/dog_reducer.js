import { merge } from 'lodash';

import {
  RECEIVE_DOGS,
  RECEIVE_DOG,
  RECEIVE_DOG_ERRORS,
  CLEAR_DOG_ERRORS
} from '../actions/dog_actions';

const defaultState = {
  entities: {},
  errors: []
};

const dogReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DOGS:
      return merge({}, state, { entities: action.dogs });

    case RECEIVE_DOG:
      const dog = action.dog;
      return merge({}, state, { entities: { [dog.id]: dog }});

    case RECEIVE_DOG_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });

    case CLEAR_DOG_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;

    default:
      return state;
  }
};

export default dogReducer;
