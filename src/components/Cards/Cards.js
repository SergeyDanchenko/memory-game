import React from 'react';
import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';


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
      <div className='game-section'>
        <div className='panel'>
          <div className='moves'>Moves: {this.props.moveCounter}</div>
          <NavLink to='/menu'>
            <div className='button' onClick={this.props.onButtonClickSound}>
              Menu
            </div>
          </NavLink>
        </div>

        <div className="cards-wrapper">
        {this.props.cardSet.map((obj) => (
          <Card key={obj.id} cardObj={obj} onCardClick={this.onCardClick} />
        ))}
        </div>
      </div>
    );
  }
}

export default Cards;