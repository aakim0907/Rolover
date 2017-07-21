import { connect } from 'react-redux';

import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => (
  {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
);

const mapDispatchToProps = (dispatch, param) => {
  const formType = param.formType;
  const processForm = (formType === 'login') ? login : signup;
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
