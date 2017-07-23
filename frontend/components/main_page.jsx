import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from './search/search_box';

const MainPage = () => (
  <div className="mainpage-container">
    <div className="main-image">
      <SearchBox />
    </div>
  </div>
);

export default MainPage;
