import { connect } from 'react-redux';
import TrainerDetail from './trainer_detail';
import { fetchTrainer } from '../../actions/trainer_actions';

const mapStateToProps = ({ trainers }, { match }) => ({
  trainer: trainers[match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchTrainer: id => dispatch(fetchTrainer(id))
  //loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerDetail);
