import { connect } from 'react-redux';

import { selectAllTrainers } from '../../reducers/selectors';
import { fetchTrainers } from '../../actions/trainer_actions';
import TrainerList from './trainer_list';

const mapStateToProps = ({ trainers }) => ({
  trainers: selectAllTrainers(trainers)
});

// const mapStateToProps = ({ trainers }, { match }) => {
//   console.log(match);
//   return {
//   search: match.params.search,
//   trainers: selectAllTrainers(trainers)
// };
// };


const mapDispatchToProps = dispatch => ({
  fetchTrainers: () => dispatch(fetchTrainers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerList);
