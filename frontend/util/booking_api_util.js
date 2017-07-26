export const fetchBookings = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookings`,
  })
);

export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: { booking }
  })
);
