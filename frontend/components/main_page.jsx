import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from './search/search_container';

const MainPage = () => (
  <div className="mainpage-container">
    <div className="main-image">
      <SearchContainer />
    </div>
  </div>
);

export default MainPage;
