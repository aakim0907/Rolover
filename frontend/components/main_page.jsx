import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from './search/search_container';

const MainPage = () => (
  <div className='mainpage-container'>
    <div className='main-image'></div>
    <div className='main-banner'>
      <h1>Unleash your dog's potential</h1>
      <h4>Teaching old dog new tricks, new dog old tricks</h4>
      <br/>
      <SearchContainer where='mainpage'/>
    </div>

    <div className='main-content'>
      <h3>Welcome to the nation's most active network of devoted and caring dog trainers</h3>
      <p>Here's how it works</p>
      <br/>

      <div className='intro-1'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className='intro-2'>

      </div>
      <div className='intro-3'>
        <div className='intro-3-1'>
          <p className='intro-bold'>Search for the training type you want</p>
          <p className='intro-weak'>Browse profiles and read reviews</p>
        </div>
        <div className='intro-3-2'>
          <p className='intro-bold'>Contact a trainer</p>
          <p className='intro-weak'>Send request to book a trianing session</p>
        </div>
        <div className='intro-3-3'>
          <p className='intro-bold'>Attend session and learn new tricks</p>
          <p className='intro-weak'>Meet with the trainer to train your dog</p>
        </div>
      </div>

      <div className='intro-comment'>
        <div className='intro-comment-card'>
          <h3>We now have confidence in walking with our dog off leash and know he will return when called back. Amazing results with awesome trainers! :)</h3>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
