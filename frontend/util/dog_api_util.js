export const fetchDogs = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/dogs`,
  })
);

export const createDog = dog => (
  $.ajax({
    method: 'POST',
    url: '/api/dogs',
    data: { dog }
  })
);
