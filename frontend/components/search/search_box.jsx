import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obedience: false, behavior: false, advanced: false };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: !this.state[field]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state;
    this.props.fetchTrainers(search);
  }

  render() {
    return (
      <div className="search-box-container">
        <form onSubmit={this.handleSubmit}>
          <button className="btn green" onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

// <input type="text"
//   value={this.state.email}
//   onChange={this.update('email')}
//   placeholder="&#f003; Enter your email address"
//   className="session-input"
//   />
//
// <input type="password"
//   value={this.state.password}
//   onChange={this.update('password')}
//   placeholder="&#f023; Password"
//   className="session-input"
//   />
