import React from 'react';

import './Card.scss';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    let cardClassNames = 'card';
    if (this.props.cardObj.isTurned) {
      cardClassNames += ' turn';
    }

    return (
      <div className='card-wrapper'>
        <div id={ this.props.cardObj.id } className={ cardClassNames } >
          <div className='front' onClick={ () => this.props.onCardClick(this.props.cardObj.id) } />
          <div className='back' >
            <img src={this.props.cardObj.imgName}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
