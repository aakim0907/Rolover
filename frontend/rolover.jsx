import React from 'react';
import ReactDOM from 'react-dom';

// testing
import { login, signup, logout } from './util/session_api_util';
// end of testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Rolover</h1>, root);

  // testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  // end of testing

});
