import { connect } from 'react-redux';

import { createReview, clearReviewErrors } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.reviews.errors
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
