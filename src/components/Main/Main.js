import React from 'react';
import Cards from '../Cards/Cards';
import * as cardSets from '../../cardsSets/cardsSets';
import { BrowserRouter, Route } from 'react-router-dom';

import './Main.scss';
import Menu from '../Menu/Menu';

class Main extends React.Component {

  state = {
    cardSet: cardSets.test,
  };
  firstTurnedCard = null;
  secondTurnedCard = null;

  isGuessd = () => {
    if (this.firstTurnedCard && this.secondTurnedCard) {
      return this.firstTurnedCard.setId === this.secondTurnedCard.setId;
    }
    return false;
  };

  turnTwoCards = (firstCardId, secondCardId) => {
    this.setState((state) => {
      const newState = { ...state };
      newState.cardSet.find((cardObj) => cardObj.id === firstCardId).isTurned = false;
      newState.cardSet.find((cardObj) => cardObj.id === secondCardId).isTurned = false;
      return newState;
    });
  };

  onCardClick = (id) => {
    const pickedCardObj = this.state.cardSet.find((cardObj) => cardObj.id === id);
    const pickedCardObjCoppy = { ...pickedCardObj };

    if (pickedCardObj.isGuessed) {
      return;
    }

    this.setState((state) => {
      const pickedCardObjIndex = state.cardSet.indexOf(pickedCardObj);
      const newState = { ...state.cardSet };
      newState[pickedCardObjIndex].isTurned = true;
      pickedCardObjCoppy.isTurned = true;
      return newState;
    });

    if (!this.firstTurnedCard) {
      this.firstTurnedCard = pickedCardObjCoppy;
    } else {
      this.secondTurnedCard = pickedCardObjCoppy;
      if (this.isGuessd()) {
        const firstTurnedCardId = this.firstTurnedCard.id;
        const secondTurnedCardId = this.secondTurnedCard.id;
        this.firstTurnedCard = null;
        this.secondTurnedCard = null;
        this.setState((state) => {
          const newState = { ...state };
          newState.cardSet.find((cardObj) => cardObj.id === firstTurnedCardId).isGuessed = true;
          newState.cardSet.find((cardObj) => cardObj.id === secondTurnedCardId).isGuessed = true;
          return newState;
        });
      } else {
        setTimeout(this.turnTwoCards, 1000, this.firstTurnedCard.id, this.secondTurnedCard.id);
        this.firstTurnedCard = null;
        this.secondTurnedCard = null;
      }
    }
  };

  render() {
    return (
      <BrowserRouter>
        <main className='main'>
          <Route path='/game' render={() => <Cards cardSet={this.state.cardSet} onCardClick={this.onCardClick} />}/>
          <Route exact path='/' component={Menu} />
        </main>
      </BrowserRouter>
    );
  }
}

export default Main;