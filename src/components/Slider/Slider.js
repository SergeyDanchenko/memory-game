import React from 'react';

import './Slider.scss'

const Slider = (props) => {
  return (
    <div className='slider-wrapper'>
      <input type='range' min='0' max='1' step='0.1' value={props.value} className={`${props.class} slider`} onChange={props.onChange}/>
    </div>
  );
};

export default Slider;
