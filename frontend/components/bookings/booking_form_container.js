import { connect } from 'react-redux';

import { createBooking, clearBookingErrors } from '../../actions/booking_actions';
import { fetchDogs } from '../../actions/dog_actions';
import { selectAllDogs } from '../../reducers/selectors';
import BookingForm from './booking_form';

const mapStateToProps = (state, { match }) => ({
  currentUserId: state.session.currentUser.id,
  currentTrainerId: parseInt(match.params.id),
  dogs: selectAllDogs(state.dogs),
  errors: state.bookings.errors
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  fetchDogs: id => dispatch(fetchDogs(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
