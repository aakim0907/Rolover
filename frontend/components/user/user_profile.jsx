import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className='user-profile-container'>
        
      </div>
    );
  }
}

export default withRouter(UserProfile);
