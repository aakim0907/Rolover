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
    <Link to ={`trainers/${trainer.id}`}>
      <div className="trainer-list-item">
        <div className="trainer-list-profile">

        </div>

        <div className="trainer-list-main">
          <div className="trainer-list-name">
            <Link to={`/trainers/${trainer.id}`}>
              <h3>{trainer.name}</h3>
            </Link>
          </div>

          <div className="trainer-list-description">
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
        </div>

      </div>
    </Link>
  );
};

export default TrainerIndexItem;



// <Link to ={`trainers/${trainer.id}`}>
//   <div className="container">
//     <div className="col-3">
//
//     </div>
//
//     <div className="col-7">
//       <div className="row">
//         <Link to={`/trainers/${trainer.id}`}>
//           <span>{trainer.name}</span>
//         </Link>
//       </div>
//
//       <div className="row">
//         <div className="col-2">
//           <span>&quot;{trainer.profile_quote}&quot;</span>
//         </div>
//
//         <div className="col-2">
//           <span>{trainer.price}&#36;</span>
//         </div>
//
//         <div className="col-2">
//           <span>{trainer.city}, {trainer.state} {trainer.zip}</span>
//         </div>
//       </div>
//     </div>
//
//   </div>
// </Link>
