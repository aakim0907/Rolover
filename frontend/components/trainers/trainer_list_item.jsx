import React from 'react';
import { Link } from 'react-router-dom';
import renderStars from '../helper/star';

class TrainerIndexItem extends React.Component {
  showTrainingType(trainer) {
    let types = [];

    if (trainer.obedience) {
      types.push(<img src={window.images.obedience} alt='obedience-icon' className='display-type'/>);
    }
    if (trainer.behavior) {
      types.push(<img src={window.images.behavior} alt='behavior-icon' className='display-type'/>);
    }
    if (trainer.advanced) {
      types.push(<img src={window.images.advanced} alt='advanced-icon' className='display-type'/>);
    }

    return types;
  }

  render() {
    const { trainer } = this.props;
    const profile = trainer.images.find(img => img.img_type === 'profile');

    return (
      <div className='trainer-list-item'>
        <div className='trainer-list-profile'>
          <img src={ profile.img_url }></img>
        </div>

        <div className='trainer-list-main'>
          <div className='trainer-list-head'>
            <div className='trainer-list-name'>
              <h3>{trainer.name}</h3>
            </div>

            <div className='trainer-list-price'>
              <span>&#36;{trainer.price}</span>
            </div>
          </div>

          <div className='trainer-list-rating'>
            <span className='star m'>{renderStars(trainer.rating)}</span>
            <span className='review sm'> ({`${trainer.review_count} ` + (trainer.review_count === 1 ? 'review' : 'reviews')})</span>
          </div>

          <div className='trainer-list-address'>
            <p>{trainer.city}, {trainer.state}, {trainer.zip}</p>
          </div>

          <div className='trainer-list-bottom'>
            <div className='trainer-list-quote'>
              <p>&quot;{trainer.profile_quote}&quot;</p>
            </div>
            <div className='trainer-list-type'>
              {this.showTrainingType(trainer)}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TrainerIndexItem;
