import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchBookings } from '../../actions/booking_actions';
import { fetchDogs } from '../../actions/dog_actions';
import { selectAllBookings, selectAllDogs } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookings: selectAllBookings(state.bookings),
  dogs: selectAllDogs(state.dogs)
});

const mapDispatchToProps = dispatch => ({
  fetchBookings: id => dispatch(fetchBookings(id)),
  fetchDogs: id => dispatch(fetchDogs(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
