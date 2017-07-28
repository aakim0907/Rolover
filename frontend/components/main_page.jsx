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

      <div className='intro-4'>
        <div className='intro-comment-card'>
          <div></div>
          <h3>Now we can go horsebackriding with our dog. Thank you Rolover!!</h3>
          <p>Kelly C.</p>
        </div>
      </div>

      <div className='intro-5'>
        <h3>Services at Rolover</h3>
        <div className='intro-5-wrap'>
          <div className='intro-5-1'>
            <p className='intro-bold'>Obedience Training</p>
            <img src={window.images.obedience} alt='obedience-icon'/>
            <p>Obedience Training provides you solutions for basic obedience. Work on addressing your dog's state of mind, creating a happy, balanced and well behaved dog.</p>
            <p className='intro-weak'>Loose Leash Walking</p>
            <p className='intro-weak'>Sit/Stay</p>
            <p className='intro-weak'>Down/Stay</p>
            <p className='intro-weak'>Place Command</p>
            <p className='intro-weak'>Crate Training</p>
            <p className='intro-weak'>Waiting for Food</p>
            <p className='intro-weak'>Waiting at Thresholds (Doors, Car, Crate, etc.)</p>
          </div>
          <div className='intro-5-2'>
            <p className='intro-bold'>Behavior Training</p>
            <img src={window.images.behavior} alt='behavior-icon'/>
            <p>Behavior Training addresses mostly aggression issues. Find out the source of the problem behavior, what is causing it, and address the behavior of the dog and owner together.</p>
            <p className='intro-weak'>Human Aggression</p>
            <p className='intro-weak'>Leash Reactivity</p>
            <p className='intro-weak'>Dog-to-Dog Aggression</p>
            <p className='intro-weak'>Food and/or Resource Guarding</p>
            <p className='intro-weak'>Separation Anxiety</p>
            <p className='intro-weak'>Severe Fear Issues</p>
          </div>
          <div className='intro-5-3'>
            <p className='intro-bold'>Advanced Training</p>
            <img src={window.images.advanced} alt='advanced-icon'/>
            <p>Dogs are capable of learning a wide variety of skills just like people. Explore what more your dog can do with our best trainers.</p>
            <p className='intro-weak'>Loose Leash Walking</p>
            <p className='intro-weak'>Sit/Stay</p>
            <p className='intro-weak'>Down/Stay</p>
            <p className='intro-weak'>Place Command</p>
            <p className='intro-weak'>Crate Training</p>
            <p className='intro-weak'>Waiting for Food</p>
            <p className='intro-weak'>Waiting at Thresholds (Doors, Car, Crate, etc.)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
