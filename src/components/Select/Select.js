import React from 'react';

import './Select.scss';

const Select = (props) => {
  return (
    <select className='select' value={props.value} onChange={props.onChange}>
      <option value={props.optionOneValue}>{props.optionOneText}</option>
      <option value={props.optionTwoValue}>{props.optionTwoText}</option>
    </select>
  );
};

export default Select;