import React from 'react';
import Card from './Card/Card';

import './Cards.scss';

class Cards extends React.Component {

  constructor(props) {
    super(props);  
  }

  onCardClick = (id) => {
    this.props.onCardClick(id);
  };

  render() {
    return (
      <div className="cards-wrapper">
        {this.props.cardSet.map((obj) => (
          <Card key={obj.id} cardObj={obj} onCardClick={this.onCardClick} />
        ))}
      </div>
    );
  }
}

export default Cards;