import React from 'react';
import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';

const Menu = (props) => {

  const onNewGameClick = () => {
    props.onNewGameClick();
  }

  return (
    <div className='menu-wrapper'>
      <MenuItem path='/game' innerText='New Game' onClick={onNewGameClick}/>
      <MenuItem path='/statistics' innerText='Statistics' />
      <MenuItem path='/settings' innerText='Settings' />
    </div>
  );
};

export default Menu;