import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <NavLink to='/game'>
        <div className='menu-item'>New Game</div>
      </NavLink>
      <NavLink to='/settings'>
        <div className='menu-item'>Settings</div>
      </NavLink>
    </div>
  );
};

export default Menu;