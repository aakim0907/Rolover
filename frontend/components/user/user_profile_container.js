import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(UserProfile);
