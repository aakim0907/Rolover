import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from './search/search_container';

const MainPage = () => (
  <div className='mainpage-container'>
    <div className='main-image'></div>
    <div className='main-banner'>
      <div className='main-banner-h1'>
        <h1>Unleash your dog's potential</h1>
      </div>
      <div className='main-banner-h4'>
        <h4>Teaching old dog new tricks, new dog old tricks</h4>
      </div>
      <SearchContainer where='mainpage'/>
    </div>
  </div>
);

export default MainPage;
