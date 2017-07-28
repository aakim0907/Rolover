import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SessionFormContainer from '../session_form/session_form_container';
import AuthModal from '../auth_modal';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleDemoClick(e) {
    e.preventDefault();
    this.props.login({email: "guest@rolover.dog", password: "woofbark"});
  }

  handleLogout() {
    const { logout } = this.props;
    logout().then(
      () => (this.props.history.push('/'))
    );
  }

  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = () => (
      <div className="login-signup">
        <button className="demo" onClick={this.handleDemoClick}>Demo Account</button>

        <AuthModal clearErrors={this.props.clearErrors} />
      </div>
    );

    const personalGreeting = currentUser => (
    	<div className="login-signup">
        <Link to={'/profile'}><span className="header-name">{currentUser.email}</span></Link>
        <button onClick={this.handleLogout}>Log Out</button>
    	</div>
    );

    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
  }
}

export default withRouter(Greeting);
