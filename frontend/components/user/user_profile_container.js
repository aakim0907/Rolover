import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchBookings } from '../../actions/booking_actions';
import { fetchDogs, createDog } from '../../actions/dog_actions';
import { selectAllBookings, selectAllDogs } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookings: selectAllBookings(state.bookings),
  dogs: selectAllDogs(state.dogs),
  errors: state.dogs.errors
});

const mapDispatchToProps = dispatch => ({
  fetchBookings: id => dispatch(fetchBookings(id)),
  fetchDogs: id => dispatch(fetchDogs(id)),
  createDog: dog => dispatch(createDog(dog))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
