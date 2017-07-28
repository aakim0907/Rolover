import React from 'react';

const Footer = (props) => (
  <div className='footer'>
      <div>
        <small>Project by: Young Eun Kim</small>
        <br/>
        <small>For Portfolio Purposes Only</small>
      </div>
      <div className='icon-box'>
        <a href='mailto:aakim0907@gmail.com'><i className='fa fa-envelope-o' aria-hidden='true'></i></a>
        <a href='https://github.com/aakim0907/Rolover' target='_blank'><i className='fa fa-github' aria-hidden='true'></i></a>
        <a href='https://www.linkedin.com/in/young-eun-kim/' target='_blank'><i className='fa fa-linkedin' aria-hidden='true'></i></a>
      </div>
  </div>
);

export default Footer;
