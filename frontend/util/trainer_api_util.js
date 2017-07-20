export const fetchTrainers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/trainers'
    // data: { search }
  })
);

export const fetchTrainer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/trainers/${id}`
  })
);
