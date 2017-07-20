import { merge } from 'lodash';

import {
  RECEIVE_TRAINERS,
  RECEIVE_TRAINER
} from '../actions/trainer_actions';

const _defaultState = {
  currentTrainer: null,
  byID: {}
};

const trainersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRAINERS:
      const trainers = action.trainers;
      return merge({}, _defaultState, {
        byID: trainers
      });

    case RECEIVE_TRAINER:
      const trainer = action.trainer;
      return merge({}, _defaultState, {
        currentTrainer: trainer
      });

    default:
      return state;
  }
};

export default trainersReducer;
