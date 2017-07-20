import { connect } from 'react-redux';

import { selectAllTrainers } from '../../reducers/selectors';
import { fetchTrainers } from '../../actions/trainer_actions';
import TrainerList from './trainer_list';

const mapStateToProps = ({ trainers }) => {
  // console.log(trainers);
  return {
  trainers: selectAllTrainers(trainers),
};
};

const mapDispatchToProps = dispatch => ({
  fetchTrainers: () => dispatch(fetchTrainers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerList);
