export const fetchTrainers = filters => (
  $.ajax({
    method: 'GET',
    url: '/api/trainers',
    data: { filters }
  })
);

export const fetchTrainer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${id}`
  })
);
