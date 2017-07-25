import React from 'react';
import renderStars from '../helper/star';

const ReviewListItem = ({ review }) => {
  return (
    <div className='review-list-item'>
      <div className='review-item-1'>
        <div className='review-item-1-1'>
          <img src={review.user.profile} className='review-profile'/>
        </div>
        <div className='review-item-1-2'>
          <div className='review-item-1-2-name'>
            <p>{review.user.email}</p>
          </div>
          <div className='review-item-1-2-date'>
            <p>July, 2017</p>
          </div>
        </div>
      </div>

      <div className='review-item-2'>
        <span className='star sm'>{renderStars(review.rating)}</span>
      </div>

      <div className='review-item-3'>
        <p>{review.body}</p>
      </div>
    </div>
  );
};

export default ReviewListItem;
