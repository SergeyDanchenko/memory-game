import React from 'react';
import { Link } from 'react-router-dom';

import './NavButton.scss';

const NavButton = (props) => {
  return (
    <div className='nav-button'>
      <Link to={props.to} onClick={props.onClick} className='nuv-button__link'>{props.innerText}</Link>
    </div>
  );
};

export default NavButton;