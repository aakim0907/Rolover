import { connect } from 'react-redux';
import TrainerDetail from './trainer_detail';
import { fetchTrainer } from '../../actions/trainer_actions';

const mapStateToProps = ({ trainers }, { match }) => ({
  trainer: trainers[match.params.id]
});

export default connect(
  mapStateToProps
)(TrainerDetail);
