import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AuthModal from '../auth_modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleDemoClick(e) {
    e.preventDefault();
    this.props.processForm({ email: "bob@gmail", password: "123456" });
  }

  renderRedirect() {
    const redirectMsg = (
      this.props.formType === 'login' ?
      "Don't have an account?" : "Already have an account?"
    );

    return (
      <div className="other-link">
        <p>{redirectMsg}</p>
        <AuthModal buttonClass='session-redirect-btn' formType={this.props.formType} />
      </div>
    );
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const renderMessage = (
      this.props.formType === 'login' ? 'Log In' : 'Sign Up for Rolover'
    );

    return (
      <div className="session-form-container">

        <h3>{renderMessage}</h3>

          <form onSubmit={this.handleSubmit}>
            <div className="session-form-box">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="&#f003; Enter your email address"
                className="session-input"
                />
            <br/>

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="&#f023; Password"
                className="session-input"
                />
            <br/>

            {this.renderErrors()}

            <input type="submit" className="btn green" value={this.props.formType === 'login' ? 'Log In' : 'Sign Up'}/>
            <button className="btn demo-btn" onClick={this.handleDemoClick}>Demo Account</button>
          </div>
        </form>

        {this.renderRedirect()}

      </div>
    );
  }
}

export default withRouter(SessionForm);
