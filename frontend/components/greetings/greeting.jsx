import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from '../session_form/session_form_container';
import AuthModal from '../auth_modal';

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

        <AuthModal formType='login' />
        <AuthModal formType='signup' />

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
