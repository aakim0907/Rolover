import { merge } from 'lodash';

import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS
} from '../actions/booking_actions';

const defaultState = {
  entities: {},
  errors: []
};

const bookingReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, state, { entities: action.bookings });

    case RECEIVE_BOOKING:
      const booking = action.booking;
      return merge({}, state, { entities: { [booking.id]: booking }});

    case RECEIVE_BOOKING_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });

    case CLEAR_BOOKING_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;

    default:
      return state;
  }
};

export default bookingReducer;
