import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

// sync action
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


// async action
export const fetchReviews = trainerId => dispatch => (
  APIUtil.fetchReviews(trainerId).then(
    reviews => (dispatch(receiveReviews(reviews)))
  )
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(
    newReview => (dispatch(receiveReview(newReview)))
  )
);
