import React from 'react';
import NavButton from '../NavButton/NavButton';

import './WinScreen.scss';

const WinScreen = (props) => {

  let titleText;
  let subtitleText;
  let nuvButtonText;

  if (props.language === 'en') {
    titleText = 'Сongratulations!';
    subtitleText = 'You won!';
    nuvButtonText = 'Menu';
  } else {
    titleText = 'Поздравляем!';
    subtitleText = 'Вы победили!';
    nuvButtonText = 'Меню';
  }

  return (
    <div className='win-screen-wrapper'>
      <div className='win-screen-window'>
        <div className='title-wrapper'>
          <div className='title'>{titleText}</div>
          <div className='subtitle'>{subtitleText}</div>
        </div>
      </div>
      <NavButton to='/menu' onClick={props.onButtonClickSound} innerText={nuvButtonText} />
    </div>
  );
};

export default WinScreen;