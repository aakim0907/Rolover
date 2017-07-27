import { connect } from 'react-redux';

import { createBooking, clearBookingErrors } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, { match }) => ({
  currentUserId: state.session.currentUser.id,
  currentTrainerId: parseInt(match.params.id),
  errors: state.bookings.errors
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
