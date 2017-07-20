import { connect } from 'react-redux';

import { selectAllTrainers } from '../../reducers/selectors';
import { fetchTrainers } from '../../actions/trainer_actions';
import TrainersList from './trainer_list';

const mapStateToProps = ({ trainers }) => ({
  trainers: selectAllTrainers(trainers),
});

const mapDispatchToProps = dispatch => ({
  fetchTrainers: () => dispatch(fetchTrainers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainersList);
