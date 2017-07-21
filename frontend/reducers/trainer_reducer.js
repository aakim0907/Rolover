import { merge } from 'lodash';

import {
  RECEIVE_TRAINERS,
  RECEIVE_TRAINER
} from '../actions/trainer_actions';

const trainersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRAINERS:
      const trainers = action.trainers;
      return merge({}, trainers);

    case RECEIVE_TRAINER:
      const trainer = action.trainer;
      return merge({}, state, {[trainer.id]: trainer});

    default:
      return state;
  }
};

export default trainersReducer;
