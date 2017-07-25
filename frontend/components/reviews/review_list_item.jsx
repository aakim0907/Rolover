import React from 'react';
// import renderStars from '../helper/star';

const ReviewListItem = ({ review }) => {
  return (
    <div className="review-list-item">
      <span>{review.body}</span>
    </div>
  );
};

export default ReviewListItem;
