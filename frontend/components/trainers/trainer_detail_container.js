import { connect } from 'react-redux';
import TrainerDetail from './trainer_detail';
import { fetchTrainer } from '../../actions/trainer_actions';

const mapStateToProps = ({ trainers }, { match }) => ({
  trainer: trainers[match.params.id]
});

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrainer: id => dispatch(fetchTrainer(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerDetail);
