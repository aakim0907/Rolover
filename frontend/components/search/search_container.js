// import { connect } from 'react-redux';
//
// import SearchBox from './search_box';
//
// const mapStateToProps = ({ trainers }) => (
//   {
//     loggedIn: Boolean(session.currentUser),
//     errors: session.errors
//   }
// );
//
// const mapDispatchToProps = (dispatch, param) => {
//   const formType = param.formType;
//   const processForm = (formType === 'login') ? login : signup;
//   return {
//     clearErrors: () => dispatch(clearErrors()),
//     processForm: user => dispatch(processForm(user)),
//     login: user => dispatch(login(user)),
//     formType
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SearchBox);
