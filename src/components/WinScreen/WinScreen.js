import React from 'react';
import NavButton from '../NavButton/NavButton';

import './WinScreen.scss';

const WinScreen = (props) => {
  return (
    <div className='win-screen-wrapper'>
      <div className='win-screen-window'>
        <div className='title-wrapper'>
          <div className='title'>Сongratulations!</div>
          <div className='subtitle'>You won!</div>
        </div>
      </div>
      <NavButton to='/menu' onClick={props.onButtonClickSound} innerText='Menu' />
    </div>
  );
};

export default WinScreen;