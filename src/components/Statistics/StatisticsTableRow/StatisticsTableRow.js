import React from 'react';

import './StatisticsTableRow.scss';

const StatisticsTableRow = (props) => {
  return (
    <div className='row-wrapper'>
      <div className='rating'>{props.rating}</div>
      <div className='moves'>{props.moves}</div>
    </div>
  );
};

export default StatisticsTableRow;