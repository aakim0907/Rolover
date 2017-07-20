export const fetchTrainers = searchParam => (
  $.ajax({
    method: 'GET',
    url: '/api/trainers',
    data: searchParam
  })
);

export const fetchTrainer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${id}`
  })
);
