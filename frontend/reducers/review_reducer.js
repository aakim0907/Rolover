import { merge } from 'lodash';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS
} from '../actions/review_actions';

const defaultState = {
  entities: {},
  errors: []
};

const reviewReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, { entities: action.reviews });

    case RECEIVE_REVIEW:
      const review = action.review;
      return merge({}, state, { entities: { [review.id]: review }});

    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });

    case CLEAR_REVIEW_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
