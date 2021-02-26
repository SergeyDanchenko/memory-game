import React from 'react';
import { NavLink } from 'react-router-dom';

import './WinScreen.scss';

const WinScreen = () => {
  return (
    <div className='win-screen-wrapper'>
      <div className='title-wrapper'>
        <div className='title'>Сongratulations!</div>
        <div className='subtitle'>You won!</div>
      </div>
      <NavLink to='/menu' className='menu'>
        Menu
      </NavLink>
    </div>
  );
};

export default WinScreen;