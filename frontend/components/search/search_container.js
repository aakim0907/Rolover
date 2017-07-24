import { connect } from 'react-redux';

import SearchBox from './search_box';
import { fetchTrainers } from '../../actions/trainer_actions';

const mapDispatchToProps = dispatch => ({
  fetchTrainers: search => dispatch(fetchTrainers(search))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
