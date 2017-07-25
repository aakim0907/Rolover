import React from 'react';
import { Route, Link } from 'react-router-dom';

import ReviewContainer from '../reviews/review_container';
// import renderStars from '../helper/star';

//trainer.images.filter(img => img.img_type === 'main')
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

    return (
      <div className='trainer-detail-container'>
        <div className='trainer-header'>
          <div className='trainer-header-1'></div>

          <div className='trainer-header-2'>

            <div className='trainer-header-2-1'>
              <img src='http://res.cloudinary.com/rolover/image/upload/v1500614239/dawid-sobolewski-285655_iauvhs.jpg'/>
            </div>

            <div className='trainer-header-2-2'>
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
                <p>4.5 ratings 12 reviews</p>
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

          <div className='trainer-header-3'></div>
        </div>

        <div className='trainer-detail-body'>
          <ReviewContainer currentTrainer={trainer.id}/>
        </div>
      </div>
    );
  }
}

export default TrainerDetail;
