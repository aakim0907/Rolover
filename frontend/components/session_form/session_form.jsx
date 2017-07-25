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

  componentWillReceiveProps(nextProps) {
    if (this.props.formType !== nextProps.formType) {
      this.props.clearErrors();
    }
  }

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
    this.props.login({ email: 'guest@rolover.dog', password: 'woofbark' });
  }

  renderRedirect() {
    let redirect;
    if ( this.props.formType === 'login' ) {
      redirect = {
        redirectMsg: "Don't have an account?",
        buttonName: 'Sign Up',
        redirectForm: 'singup'
      };
    } else {
      redirect = {
        redirectMsg: 'Already have an account?',
        buttonName: 'Log In',
        redirectForm: 'login'
      };
    }

    return (
      <div className='other-link'>
        <p>{redirect.redirectMsg}</p>
        <button className='session-redirect-btn' onClick={() => this.props.modalFunction(redirect.redirectForm)}>{redirect.buttonName}</button>
      </div>
    );
  }

  renderErrors() {
    return(
      <ul className='errors'>
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
      <div className='session-form-container'>

        <h3>{renderMessage}</h3>

          <form onSubmit={this.handleSubmit}>
            <div className='session-form-box'>
            <br/>
              <input type='text'
                value={this.state.email}
                onChange={this.update('email')}
                placeholder='&#f003; Enter your email address'
                className='session-input'
                />
            <br/>

              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder='&#f023; Password'
                className='session-input'
                />
            <br/>

            {this.renderErrors()}

            <input type='submit' className='btn green' value={this.props.formType === 'login' ? 'Log In' : 'Sign Up'}/>
            <button className='btn demo-btn' onClick={this.handleDemoClick}>Demo Account</button>
          </div>
        </form>

        {this.renderRedirect()}

      </div>
    );
  }
}

export default withRouter(SessionForm);
