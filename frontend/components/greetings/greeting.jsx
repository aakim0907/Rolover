import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  handleDemoClick(e) {
    e.preventDefault();
    this.props.login({email: "bob@gmail", password: "123456"});
  }

  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = () => (
      <div className="login-signup">
        <button className="demo" onClick={this.handleDemoClick}>Demo Account</button>

        <Link to={'/login'}>
          <span>Log In</span>
        </Link>

        <Link to={'/signup'}>
          <span>Sign Up</span>
        </Link>
      </div>
    );

    const personalGreeting = (currentUser, logout) => (
    	<div className="login-signup">
        <span className="header-name">{currentUser.email}</span>
        <button className="logout" onClick={logout}>Log Out</button>
    	</div>
    );

    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
  }
}

export default Greeting;