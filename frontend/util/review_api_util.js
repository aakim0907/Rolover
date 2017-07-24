export const fetchReviews = id => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${id}/reviews`,
  })
);

export const createReviews = (trainerId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/trainers/${trainerId}/reviews`,
    data: { review }
  })
);
