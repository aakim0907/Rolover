import React from 'react';
import { Link } from 'react-router-dom';

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
            <div key={review.id}>{review.body}</div>
          ))}
        </div>
      );
    }
  }
}

export default ReviewList;

// { reviews.map(review => (
//   <ReviewListItem review={review} />
// ))}
