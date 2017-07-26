import { connect } from 'react-redux';

import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, { match }) => ({
  currentUserId: state.session.currentUser.id
  // currentTrainer: state.trainers[match.params.id]
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
