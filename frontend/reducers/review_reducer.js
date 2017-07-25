import { merge } from 'lodash';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW
} from '../actions/review_actions';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      const reviews = action.reviews;
      return merge({}, reviews);

    case RECEIVE_REVIEW:
      const review = action.review;
      return merge({}, state, {[review.id]: review});

    default:
      return state;
  }
};

export default reviewReducer;
