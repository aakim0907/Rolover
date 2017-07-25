export const fetchReviews = trainerId => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${trainerId}/reviews`,
  })
);

export const fetchReview = (trainerId, reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${trainerId}/reviews/${reviewId}`,
  })
);

export const createReview = (trainerId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/trainers/${trainerId}/reviews`,
    data: { review }
  })
);
