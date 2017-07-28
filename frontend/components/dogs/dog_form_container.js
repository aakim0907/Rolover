import { connect } from 'react-redux';

import DogForm from './dog_form';
import { createDog } from '../../actions/dog_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.dogs.errors
});

const mapDispatchToProps = dispatch => ({
  createDog: dog => dispatch(createDog(dog))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogForm);
