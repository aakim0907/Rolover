import { connect } from 'react-redux';

import { selectAllReviews } from '../../reducers/selectors';
import { fetchReviews, createReview, } from '../../actions/review_actions';
import ReviewList from './review_list';

const mapStateToProps = ({ reviews }) => ({
  reviews: selectAllReviews(reviews)
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: id => dispatch(fetchReviews(id)),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);
