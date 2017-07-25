import React from 'react';
import { Link } from 'react-router-dom';

import ReviewListItem from './review_list_item';
import ReviewFormContainer from './review_form_container';

class ReviewList extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.currentTrainer);
  }

  render() {
    const { reviews } = this.props;

    if (reviews.length === 0) {
      return (<div>No Reviews yet</div>);
    } else {
      return (
        <div className='review-container'>
          <div className='review-header'>
            <h3>Reviews</h3>
          </div>

          <ReviewFormContainer currentTrainerId={this.props.currentTrainer.id}/>
          
          { reviews.reverse().map(review => (
            <ReviewListItem key={review.id} review={review} />
          ))}
        </div>
      );
    }
  }
}

export default ReviewList;
