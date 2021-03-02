import React from 'react';

import './Switcher.scss'

const Switcher = (props) => {
  return (
    <label className='switcher' >
      <input type='checkbox' checked={props.checked} onChange={props.onChange} />
      <span className='switcher__slider' />
    </label>
  );
};

export default Switcher;