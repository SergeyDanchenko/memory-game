import React from 'react';
import { Link } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = (props) => {
  return <Link to={props.path} className='menu-item' onClick={props.onClick}>{props.innerText}</Link>;
};

export default MenuItem;