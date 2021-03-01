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
      <MenuItem path='/statistics' innerText='Statistics' onClick={props.onButtonClickSound}/>
      <MenuItem path='/settings' innerText='Settings' onClick={props.onButtonClickSound}/>
    </div>
  );
};

export default Menu;