import React from 'react';
import { Link } from 'react-router-dom';

import ReviewListItem from './review_list_item';

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
          { reviews.map(review => (
            <ReviewListItem key={review.id} review={review} />
          ))}
        </div>
      );
    }
  }
}

export default ReviewList;
