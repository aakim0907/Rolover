import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchBookings } from '../../actions/booking_actions';
import { selectAllBookings } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookings: selectAllBookings(state.bookings)
});

const mapDispatchToProps = dispatch => ({
  fetchBookings: id => dispatch(fetchBookings(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
