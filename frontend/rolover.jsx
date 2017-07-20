import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// START TESTING
import { fetchTrainer, fetchTrainers } from './actions/trainer_actions';
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // START TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchTrainers = fetchTrainers;
  window.fetchTrainer = fetchTrainer;
  // END TESTING
});
