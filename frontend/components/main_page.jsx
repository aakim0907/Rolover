import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from './search/search_container';

const MainPage = () => (
  <div className='mainpage-container'>
    <div className='main-image'></div>
    <div className='main-banner'>
      <div className='main-banner-h1'>
        <h1>Love your dog. See what more they can do!</h1>
      </div>
      <div className='main-banner-h4'>
        <h4>Find and book dog trainers to your needs</h4>
      </div>
      <SearchContainer />
    </div>
  </div>
);

export default MainPage;
