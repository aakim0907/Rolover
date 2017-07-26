import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component {
  renderDogs() {
    const { currentUser } = this.props;
    if (currentUser.dogs.length === 0) {
      return (
        <span>You don't have any dogs saved!</span>
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

  renderBookings() {

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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
