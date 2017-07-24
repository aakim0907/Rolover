import { connect } from 'react-redux';

import { selectAllTrainers } from '../../reducers/selectors';
import SearchBox from './search_box';
import { fetchTrainers } from '../../actions/trainer_actions';

const mapStateToProps = ({ trainers }) => ({
  trainers: selectAllTrainers(trainers)
});

const mapDispatchToProps = dispatch => ({
  fetchTrainers: search => dispatch(fetchTrainers(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
