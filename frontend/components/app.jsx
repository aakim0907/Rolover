import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../util/route_util';

import NavBar from './nav_bar';
import MainPage from './main_page';
import TrainerListContainer from './trainers/trainer_list_container';
import TrainerDetailContainer from './trainers/trainer_detail_container';
import BookingFormContainer from './bookings/booking_form_container';
import UserProfileContainer from './user/user_profile_container';
import Footer from './footer';

const App = () => (
  <div>
    <header>
      <NavBar/>
    </header>

    <div className='body-content'>
      <Switch>
        <ProtectedRoute path='/trainers/:id/bookings/new' component={BookingFormContainer}/>
        <Route path='/trainers/:id' component={TrainerDetailContainer}/>
        <Route path='/trainers' component={TrainerListContainer}/>
        <ProtectedRoute path='/profile' component={UserProfileContainer}/>
        <Route exact path="/" component={MainPage}/>
      </Switch>
    </div>
    
    <Footer/>
  </div>
);

export default App;
