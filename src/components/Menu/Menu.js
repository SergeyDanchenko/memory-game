import React from 'react';
import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';

const Menu = (props) => {

  const onNewGameClick = () => {
    props.onNewGameClick();
  }

  let newGameLinkText;
  let statisticsLinkText;
  let settingsLinkText;

  if (props.language === 'en') {
    newGameLinkText = 'New Game';
    statisticsLinkText = 'Statistics';
    settingsLinkText = 'Settings';
  } else {
    newGameLinkText = 'Новая Игра';
    statisticsLinkText = 'Статистика';
    settingsLinkText = 'Настройки';
  }

  return (
    <div className='menu-wrapper'>
      <MenuItem path='/game' innerText={newGameLinkText} onClick={onNewGameClick}/>
      <MenuItem path='/statistics' innerText={statisticsLinkText} onClick={props.onButtonClickSound}/>
      <MenuItem path='/settings' innerText={settingsLinkText} onClick={props.onButtonClickSound}/>
    </div>
  );
};

export default Menu;