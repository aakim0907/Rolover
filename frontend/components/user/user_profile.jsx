import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  renderDogs() {
    const { currentUser } = this.props;
    if (currentUser.dogs.length === 0) {
      return (
        <span className='empty-span'>( You don't have any dogs saved )</span>
      );
    } else {
      return (
        <ul>
          { currentUser.dogs.map(dog => (
            <li key={dog.id}>{dog.name} ({dog.sex}) - {dog.breed}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderStatus(status) {
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
                <p>{booking.training_type.toUpperCase()} training with 'trainer'</p>
              </div>
              <div className='bl-2'>
                {this.renderStatus(booking.status)}
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
