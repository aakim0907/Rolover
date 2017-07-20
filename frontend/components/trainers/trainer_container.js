import { connect } from 'react-redux';

import { selectAllTrainers } from '../../reducers/selectors';
import trainersList from './trainer_list';

const mapStateToProps = ({ trainers }) => ({
  trainersList: selectAllTrainers(trainers),
  currentTrainer: trainers.currentTrainer
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(trainersList);
