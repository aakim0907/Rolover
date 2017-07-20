import { merge } from 'lodash';

import {
  RECEIVE_TRAINERS,
  RECEIVE_TRAINER
} from '../actions/trainer_actions';

const _defaultState = {
  trainers: {
    byID: {},
    currentTrainerID: null
  }
};

const trainersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRAINERS:
      const trainers = action.trainers;
      return merge({}, _defaultState, {
        trainers
      });

    case RECEIVE_TRAINER:
      const errors = action.errors;
      return merge({}, _defaultState, {
        errors
      });

    default:
      return state;
  }
};

export default trainersReducer;
