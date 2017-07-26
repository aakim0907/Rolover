import React from 'react';
import { Route, Link } from 'react-router-dom';

import TrainerCarousel from './trainer_carousel';
import ReviewContainer from '../reviews/review_container';
import renderStars from '../helper/star';

class TrainerDetail extends React.Component {
  componentDidMount() {
    this.props.fetchTrainer(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchTrainer(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.trainer) {
      return null;
    }

    const { trainer } = this.props;
    const profile = trainer.images.find(img => img.img_type === 'profile');
    const images = trainer.images.filter(img => img.img_type === 'main');

    // <TrainerCarousel images={images} />
    return (
      <div className='trainer-detail-container'>
        <div className='trainer-header'>
          <div className='trainer-header-box'>

            <div className='trainer-header-box-1'>
              <img src={images[0].img_url}/>
            </div>

            <div className='trainer-header-box-2'>
              <div className='th-profile'>
                <div className='th-profile-img'>
                  <img src={profile.img_url} />
                </div>
                <div className='th-profile-name'>
                  <h2>{trainer.name}</h2>
                </div>
              </div>

              <div className='th-address'>
                <p>{trainer.city}, {trainer.state} {trainer.zip}</p>
              </div>

              <div className='th-ratings'>
                <span className='star lg'>{renderStars(trainer.rating)}</span>
              </div>

              <div className='th-reviews'>
                <span className='review sm'>( {`${trainer.review_count} ` + (trainer.review_count === 1 ? 'review' : 'reviews')} )</span>
              </div>

              <div className='th-description'>
                <div className='td-about'>
                  <h4>More about {trainer.name}:</h4>
                </div>
                <div className='td-description'>
                  <p>{trainer.description}</p>
                </div>
              </div>

              <div className='th-booking'>
                <button className='btn green'>Booking</button>
              </div>
            </div>
          </div>

        </div>

        <div className='trainer-detail-body'>
          <ReviewContainer currentTrainerId={trainer.id}/>
        </div>
      </div>
    );
  }
}

export default TrainerDetail;
