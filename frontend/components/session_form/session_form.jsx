import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
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

  handleDemoClick(e) {
    e.preventDefault();
    this.props.processForm({email: "bob@gmail", password: "123456"});
  }

  renderMessage() {
    if (this.props.formType === "login") {
      return (
        <h3>Log In</h3>
      );
    } else {
      return (
        <h3>Sign Up for Rolover</h3>
      );
    }
  }

  renderDemo() {
    if (this.props.formType === 'login') {
      return (
        <button className="btn demo-btn" onClick={this.handleDemoClick}>Demo Account</button>
      );
    }
  }

  renderRedirect() {
    if (this.props.formType === "login") {
      return (
        <div className="other-link">
          <p>Don't have an account?</p>
          <Link to={'/signup'}>
            <span>Sign Up</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="other-link">
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
    return (
      <div className="session-form-container">

        {this.renderMessage()}
        {this.renderErrors()}

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

            <input type="submit" className="btn green" value={this.props.formType === 'login' ? 'Log In' : 'Sign Up'}/>
            {this.renderDemo()}
          </div>
        </form>

        {this.renderRedirect()}

      </div>
    );
  }
}

export default withRouter(SessionForm);
