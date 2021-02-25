import React from 'react';

import './Card.scss';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardBackSideStyle: {
        backgroundImage: `url(../../assets/images/${props.cardObj.imgName})`,
      },
    }
  }

  render() {
    
    let cardClassNames = 'card';
    if (this.props.cardObj.isTurned) {
      cardClassNames += ' turn';
    }

    return (
      <div className='card-wrapper'>
        <div id={ this.props.cardObj.id } className={ cardClassNames } onClick={ () => this.props.onCardClick(this.props.cardObj.id) }>
          <div className='front' />
          <div className='back' style={ this.state.cardBackSideStyle }></div>
        </div>
      </div>
    );
  }
}

export default Card;
