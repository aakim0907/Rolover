export const fetchReviews = trainerId => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${trainerId}/reviews`,
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `api/trainers/${review.trainer_id}/reviews`,
    data: { review }
  })
);
