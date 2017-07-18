import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// testing
import { login, signup, logout } from './actions/session_actions';
// end of testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

  // testing
  window.getState = store.getState();
  window.dispatch = store.dispatch;

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  // end of testing

});
