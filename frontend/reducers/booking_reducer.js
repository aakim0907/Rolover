import { merge } from 'lodash';

import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING
} from '../actions/booking_actions';

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      const bookings = action.bookings;
      return merge({}, bookings);

    case RECEIVE_BOOKING:
      const booking = action.booking;
      return merge({}, state, {[booking.id]: booking});

    default:
      return state;
  }
};

export default bookingReducer;
