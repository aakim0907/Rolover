import { connect } from 'react-redux';
import TrainerDetail from './trainer_detail';
import { fetchTrainer } from '../../actions/trainer_actions';

const mapStateToProps = (state, { match }) => ({
  trainer: state.trainers[match.params.id],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTrainer: id => dispatch(fetchTrainer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerDetail);
