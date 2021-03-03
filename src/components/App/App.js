import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { animalsCardsQuantity18, foodCardsQuantity18, animalsCardsQuantity12, foodCardsQuantity12 } from '../../cardsSets/cardsSets';
import { shuffledArr } from './../../helpFunctions/helpFunctions';

import './App.scss';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // cardSet: shuffledArr(foodCards.map(obj => ({ ...obj }))),
      cardSet: animalsCardsQuantity18.map(obj => ({ ...obj })),
      cardSetType: 'animals',
      cardsQuantity: '18',
    };
  }

  onNewGameClick = () => {

    if (this.state.cardsQuantity === '18') {
      const cardSet = this.state.cardSetType === 'animals' ? animalsCardsQuantity18.map(obj => ({ ...obj })) : foodCardsQuantity18.map(obj => ({ ...obj }));
      this.setState({
        // cardSet: shuffledArr(foodCards.map(obj => ({ ...obj }))),
        cardSet: cardSet,
      });
    } else {
      const cardSet = this.state.cardSetType === 'animals' ? animalsCardsQuantity12.map(obj => ({ ...obj })) : foodCardsQuantity12.map(obj => ({ ...obj }));
      this.setState({
        // cardSet: shuffledArr(foodCards.map(obj => ({ ...obj }))),
        cardSet: cardSet,
      });
    }
  };

  onCardsQuantityChange = (event) => {
    let newCardSet;
    if (event.target.value === '12') {
      if (this.state.cardSetType === 'food') {
        newCardSet = foodCardsQuantity12.map(obj => ({ ...obj }));
      } else {
        newCardSet = animalsCardsQuantity12.map(obj => ({ ...obj }));
      }
    } else {
      if (this.state.cardSetType === 'food') {
        newCardSet = foodCardsQuantity18.map(obj => ({ ...obj }));
      } else {
        newCardSet = animalsCardsQuantity18.map(obj => ({ ...obj }));
      }
    }
    this.setState({
      cardSet: newCardSet,
      cardsQuantity: event.target.value,
    });
  };

  onCardSetChange = (event) => {
    let newCardSet;
    let newCardSetType;
    if (event.target.value === 'food') {
      newCardSet = foodCardsQuantity18.map(obj => ({ ...obj }));
      newCardSetType = 'food';
    } else {
      newCardSet = animalsCardsQuantity18.map(obj => ({ ...obj }));
      newCardSetType = 'animals';
    } 
    this.setState({
      cardSet: newCardSet,
      cardSetType: newCardSetType,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Main 
            onCardSetChange={this.onCardSetChange}
            onNewGameClick={this.onNewGameClick} 
            cardSet={this.state.cardSet.map(obj => ({ ...obj }))}
            cardSetType={this.state.cardSetType}
            onCardsQuantityChange={this.onCardsQuantityChange}
            cardsQuantity={this.state.cardsQuantity}
          />
          <Footer />
          <audio src='./assets/audio/gameMusic.mp3' className='game-music' loop />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;