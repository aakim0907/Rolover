import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import {ProtectedRoute} from '../util/route_util';

import NavBar from './nav_bar';
import MainPage from './main_page';
import TrainerListContainer from './trainers/trainer_list_container';
import TrainerDetailContainer from './trainers/trainer_detail_container';
import Footer from './footer';

const App = () => (
  <div>
    <header>
      <NavBar/>
    </header>

    <div className="body-content">
      <switch>
        <Route exact path="/trainers" component={TrainerListContainer} />
        <Route path="/trainers/:id" component={TrainerDetailContainer} />
        <Route exact path="/" component={MainPage} />
      </switch>
    </div>

  </div>
);

export default App;

// add footer
