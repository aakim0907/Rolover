import React from 'react';
import { Route } from 'react-router-dom';

import GreetingsContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <GreetingsContainer />
      <h1>Rolover</h1>
    </header>
  </div>
);

export default App;
