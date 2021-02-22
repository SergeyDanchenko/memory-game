import React from 'react';

import './Card.scss';

function doSmth(e) {
  e.target.parentNode.classList.toggle('turn');
}

const Card = () => {
  return (
    <div className='card-wrapper'>
      <div className='card' onClick={(e) => doSmth(e)}>
        <div className='front' />
        <div className='back'>Back</div>
      </div>
    </div>
  );
};

export default Card;
