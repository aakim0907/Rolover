import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import {ProtectedRoute} from '../util/route_util';

import NavBar from './nav_bar';
import MainPage from './main_page';
import TrainerListContainer from './trainers/trainer_list_container';
import Footer from './footer';

const App = () => (
  <div>
    <header>
      <NavBar/>
    </header>

    <div className="body-content">
      <switch>
        <Route path="/trainers" component={TrainerListContainer} />
        <Route exact path="/" component={MainPage} />
      </switch>
    </div>

  </div>
);

export default App;

// add footer
