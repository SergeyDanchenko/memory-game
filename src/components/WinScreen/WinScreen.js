import React from 'react';
import { NavLink } from 'react-router-dom';

const WinScreen = () => {
  return (
    <div className='win-screen-wrapper'>
      <div className='title'>Сongratulations!</div>
      <div className='subtitle'>You won!</div>
      <NavLink to='/menu'>
        <div>Menu</div>
      </NavLink>
    </div>
  );
};

export default WinScreen;