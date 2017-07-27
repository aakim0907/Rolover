import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

// sync action
export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
});

// async action
export const fetchBookings = userId => dispatch => (
  APIUtil.fetchBookings(userId).then(
    bookings => (dispatch(receiveBookings(bookings)))
  )
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking).then(
    newBooking => (dispatch(receiveBooking(newBooking))),
    err => (dispatch(receiveBookingErrors(err.responseJSON)))
  )
);
