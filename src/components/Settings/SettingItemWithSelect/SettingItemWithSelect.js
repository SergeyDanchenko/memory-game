import React from 'react';
import Select from '../../Select/Select';

import './SettingItemWithSelect.scss';

const SettingItemWithSelect = (props) => {
  return (
    <div className='setting-item-with-select'>
      <div className='title'>{props.title}</div>
      <Select 
        value={props.selectValue}
        onChange={props.onChange}
        optionOneValue={props.optionOneValue}
        optionOneText={props.optionOneText}
        optionTwoValue={props.optionTwoValue}
        optionTwoText={props.optionTwoText}
      />
    </div>
  );
};

export default SettingItemWithSelect;