import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='rs-logo-and-athor-wrapper'>
        <a href="https://rs.school/js/">
          <img className="rs-logo" src="./assets/images/rs_school_js.svg" />
        </a>
        <div className="athor">
          <a className="gh-logo" href="https://github.com/SergeyDanchenko">
            <img src="./assets/images/github_icon.svg" />
          </a>
          <a className="title" href="https://github.com/SergeyDanchenko">
            Sergey Danchenko
          </a>
        </div>
      </div>
      <div className='year'>2021</div>
    </footer>
  );
};

export default Footer;