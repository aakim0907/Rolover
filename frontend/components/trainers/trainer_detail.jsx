import React from 'react';
import Modal from 'react-modal';
import { Route, Link } from 'react-router-dom';

import AuthModal from '../auth_modal';
import SessionFormContainer from '../session_form/session_form_container';
import ReviewContainer from '../reviews/review_container';

import TrainerCarousel from './trainer_carousel';
import { customStyles } from '../helper/auth_modal_style';
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

  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };

    this.handleBooking = this.handleBooking.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleBooking() {
    const { trainer, currentUser } = this.props;

    if (currentUser) {
      this.props.history.push(`/trainers/${trainer.id}/bookings/new`);
    } else {
      this.openModal();
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true  });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { currentUser, trainer } = this.props;

    if (!trainer) {
      return null;
    }

    const profile = trainer.images.find(img => img.img_type === 'profile');
    const images = trainer.images.filter(img => img.img_type === 'main');

    // <img src={images[0].img_url}/>
    return (
      <div className='trainer-detail-container'>
        <div className='trainer-header'>
          <div className='trainer-header-box'>

            <div className='trainer-header-box-1'>
              <TrainerCarousel images={images} />
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
                <button className='btn green' onClick={this.handleBooking}>Book Session</button>
              </div>
            </div>
          </div>

        </div>

        <div className='trainer-detail-body'>
          <ReviewContainer currentTrainerId={trainer.id}/>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='modal'>
          <SessionFormContainer formType={'login'} openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)}/>
        </Modal>

      </div>


    );
  }
}

export default TrainerDetail;
