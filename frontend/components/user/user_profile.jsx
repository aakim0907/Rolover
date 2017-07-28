import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { merge } from 'lodash';

import DogFormContainer from '../dogs/dog_form_container';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id);
    this.props.fetchDogs(this.props.currentUser.id);
  }

  constructor(props) {
    super(props);
    this.state = { formOpen: false };
  }

  renderDogs() {
    const { currentUser, dogs } = this.props;
    if (dogs.length === 0) {
      return (
        <span className='empty-span'>( You don't have any dogs saved )</span>
      );
    } else {
      return (
        <ul>
          { dogs.map(dog => (
            <li key={dog.id}>{dog.name} ({dog.sex}) - {dog.breed}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderDogForm() {
    if (this.state.formOpen) {
      return (<DogFormContainer />);
    } else {
      return (
        <button className='btn green' onClick={() => this.setState({ formOpen: true })}>Add Dog</button>
      );
    }
  }

  renderBookingStatus(status) {
    let className;
    if (status === 'APPROVED') {
      className = 'approved';
    } else if (status === 'PENDING') {
      className = 'pending';
    } else {
      className = 'denied';
    }

    return (
      <p className={className}>{status}</p>
    );
  }

  renderBookings() {
    const { bookings } = this.props;
    if (bookings.length === 0) {
      return (
        <span className='empty-span'>( You don't have any booking records )</span>
      );
    } else {
      return (
        <div className='booking-list'>
          { bookings.map(booking => (
            <div className='booking-list-item' key={booking.id}>
              <div className='bl-1'>
                <p>{booking.training_type.toUpperCase()} training with {booking.trainer_name}</p>
              </div>
              <div className='bl-2'>
                {this.renderBookingStatus(booking.status)}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className='user-profile-container'>
        <div className='up-1'>
          <div className='up-1-1'>
            <div className='up-profile'>
              <img className='up-profile-img' src={currentUser.profile_img_url}></img>
            </div>
            <div className='up-name'>
              <h4>{currentUser.email}</h4>
            </div>
          </div>
          <div className='up-1-2'>
            <h4 className='up-header'>Dogs</h4>
            {this.renderDogs()}
            {this.renderDogForm()}            
          </div>
        </div>

        <div className='up-2'>
          <div className='up-2-1'>
            <h4 className='up-header'>Your Bookings</h4>
            {this.renderBookings()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
