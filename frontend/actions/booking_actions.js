import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

// sync action
export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});


// async action
export const fetchBookings = userId => dispatch => (
  APIUtil.fetchBookings(userId).then(
    bookings => (dispatch(receiveBookings(bookings)))
  )
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking).then(
    newBooking => (dispatch(receiveBooking(newBooking)))
  )
);
