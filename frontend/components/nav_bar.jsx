import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greetings/greeting_container';

const NavBar = () => (
    <section className="nav-bar">
      <div className="left-nav">
        <div className="logo">
          <Link to={"/"} ><img src={ window.images.logo } alt="Rolover Logo" width="35px"/></Link>
        </div>
      </div>

      <nav className="right-nav">
        <GreetingContainer />
      </nav>
    </section>
);

export default NavBar;
// <Link to={"/about"}>About</Link>
