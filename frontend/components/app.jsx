import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingsContainer from './greetings/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBar from './nav_bar';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>

    <switch>
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route exact path="/" />
    </switch>
  </div>
);

export default App;
