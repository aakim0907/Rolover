export const fetchReviews = trainerId => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${trainerId}/reviews`,
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `api/reviews`,
    data: { review }
  })
);
