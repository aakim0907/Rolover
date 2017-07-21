import React from 'react';
import { Link } from 'react-router-dom';
// import renderStars from '../helper/star';

const TrainerIndexItem = ({ trainer }) => {
  //   const imgStyle = {
  //   height: "100%",
  //   width: "100%",
  //   backgroundImage: `url(${room.main_pic_url})`
  // };

  return (
    <div className="trainer-list-item">
      <div className="trainer-list-name">
        <Link to={`/trainers/${trainer.id}`}>
            <span>{trainer.name}</span>
        </Link>
      </div>

      <div className="trainer-list-quote">
        <span>&quot;{trainer.profile_quote}&quot;</span>
      </div>

      <div className="trainer-list-price">
        <span>{trainer.price}&#36;</span>
      </div>

      <div className="trainer-list-address">
        <span>{trainer.city}, {trainer.state} {trainer.zip}</span>
      </div>

    </div>
  );
};

export default TrainerIndexItem;
