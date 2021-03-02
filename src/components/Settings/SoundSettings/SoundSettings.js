import React from 'react';
import Slider from '../../Slider/Slider';
import Switcher from '../../Switcher/Switcher';

import './SoundSettings.scss';

const SoundSettings = (props) => {
  return (
    <div className='music setting-item'>
      <div className='title'>{props.innerText}</div>
      <Switcher 
        checked={props.switcherChecked} 
        onChange={props.switcherOnChange} 
      />
      <Slider 
        value={props.volumeValue} 
        onChange={props.sliderOnChange} 
        class={props.sliderClass} 
      />
    </div>
  );
};

export default SoundSettings;