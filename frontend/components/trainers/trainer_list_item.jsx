import React from 'react';
import { Link } from 'react-router-dom';
// import renderStars from '../helper/star';

const TrainerIndexItem = ({ trainer }) => {
  const profile = trainer.images.find(img => img.img_type === 'profile');
  return (
    <div className="trainer-list-item">
      <div className="trainer-list-profile">
        <img src={ profile.img_url }></img>
      </div>

      <div className="trainer-list-main">
        <div className="trainer-list-name">
          <h2>{trainer.name}</h2>
        </div>

        <div className="trainer-list-quote">
          <p>&quot;{trainer.profile_quote}&quot;</p>
        </div>

        <div className="trainer-list-address">
          <p>{trainer.city}, {trainer.state} {trainer.zip}</p>
        </div>

        <div className="trainer-list-description">
          <p>{trainer.description}</p>
        </div>
      </div>

      <div className="trainer-list-price">
        <span>&#36;{trainer.price}</span>
      </div>

    </div>
  );
};

export default TrainerIndexItem;
