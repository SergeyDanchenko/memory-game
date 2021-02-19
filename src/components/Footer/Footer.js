import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;