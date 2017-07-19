import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
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

  renderMessage() {
    if (this.props.formType === "login") {
      return (
        <h2>Log In</h2>
      );
    } else {
      return (
        <h2>Sign Up for Rolover</h2>
      );
    }
  }

  renderRedirect() {
    if (this.props.formType === "login") {
      return (
        <div>
          <p>Don't have an account?</p>
          <Link to={'/signup'}>
            <span>Sign Up</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>Already have an account?</p>
          <Link to={'/login'}>
            <span>Log In</span>
          </Link>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">

        {this.renderMessage()}
        {this.renderErrors()}

        <form onSubmit={this.handleSubmit} className="session-form-box">
          <div className="session-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <br/>

            <input type="submit" value="Submit" />
          </div>
        </form>

        {this.renderRedirect()}

      </div>
    );
  }
}

export default withRouter(SessionForm);
