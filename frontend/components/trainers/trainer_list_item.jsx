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
    <li>
      <Link to={`/trainers/${trainer.id}`}>
        <div>
          <span>{trainer.name}</span>
        </div>
      </Link>
    </li>
  );
};

export default TrainerIndexItem;
