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
        <div className='intro-1-1'>
          <p className='intro-num'>1</p>
          <i className='fa-intro fa fa-search' aria-hidden='true'></i>
          <p className='intro-bold'>Search with training types</p>
          <p className='intro-weak'>Browse trainer profiles and read reviews</p>
        </div>
        <div className='intro-1-2'>
          <p className='intro-num'>2</p>
          <i className='fa-intro fa fa-comments-o' aria-hidden='true'></i>
          <p className='intro-bold'>Contact a trainer</p>
          <p className='intro-weak'>Send request to book a training session</p>
        </div>
        <div className='intro-1-3'>
          <p className='intro-num'>3</p>
          <i className='fa-intro fa fa-paw' aria-hidden='true'></i>
          <p className='intro-bold'>Attend session and learn new tricks!</p>
          <p className='intro-weak'>Meet with the trainer to train your dog</p>
        </div>
      </div>

      <div className='intro-2'>
        <div className='intro-comment-card'>
          <div></div>
          <h3>Now we can go horsebackriding with our dog. Thank you Rolover!!</h3>
          <p>Jay K.</p>
        </div>
      </div>

      <h3>Services at Rolover</h3>

      <div className='intro-3'>
        <div className='intro-3-1'>
          <p className='intro-bold intro-type'>Obedience Training</p>
          <img src={window.images.obedience} alt='obedience-icon'/>
          <p className='type-description'>Obedience Training provides you solutions for basic obedience. Work on addressing your dog's state of mind, creating a happy, balanced and well behaved dog.</p>
          <p className='intro-weak'>Loose Leash Walking</p>
          <p className='intro-weak'>Sit/Stay</p>
          <p className='intro-weak'>Down/Stay</p>
          <p className='intro-weak'>Place Command</p>
          <p className='intro-weak'>Crate Training</p>
          <p className='intro-weak'>Waiting for Food</p>
          <p className='intro-weak'>Waiting at Thresholds</p>
        </div>
        <div className='intro-3-2'>
          <p className='intro-bold intro-type'>Behavior Training</p>
          <img src={window.images.behavior} alt='behavior-icon' className='behavior-icon'/>
          <p className='type-description'>Behavior Training addresses mostly aggression issues. Find out the source of the problem behavior, what is causing it, and address the behavior of the dog and owner together.</p>
          <p className='intro-weak'>Human Aggression</p>
          <p className='intro-weak'>Leash Reactivity</p>
          <p className='intro-weak'>Dog-to-Dog Aggression</p>
          <p className='intro-weak'>Food and/or Resource Guarding</p>
          <p className='intro-weak'>Separation Anxiety</p>
          <p className='intro-weak'>Severe Fear Issues</p>
        </div>
        <div className='intro-3-3'>
          <p className='intro-bold intro-type'>Advanced Training</p>
          <img src={window.images.advanced} alt='advanced-icon'/>
          <p className='type-description'>Dogs are capable of learning a wide variety of skills just like people. Explore what more your dog can do with our best trainers.</p>
          <p className='intro-weak'>Roll-over</p>
          <p className='intro-weak'>High five</p>
          <p className='intro-weak'>Wave goodbye</p>
          <p className='intro-weak'>Play dead</p>
          <p className='intro-weak'>Catch/Fetch</p>
          <p className='intro-weak'>Dog Sports</p>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
