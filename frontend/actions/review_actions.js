import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

// sync action
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});


// async action
export const fetchReviews = trainerId => dispatch => (
  APIUtil.fetchReviews(trainerId).then(
    reviews => (dispatch(receiveReviews(reviews)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
  )
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(
    newReview => (dispatch(receiveReview(newReview)))
  )
);
