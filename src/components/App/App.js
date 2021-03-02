import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { animalsCards, foodCards } from '../../cardsSets/cardsSets';
import { shuffledArr } from './../../helpFunctions/helpFunctions';

import './App.scss';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // cardSet: shuffledArr(foodCards.map(obj => ({ ...obj }))),
      cardSet: animalsCards.map(obj => ({ ...obj })),
      cardSetType: 'animals',
    };
  }

  onNewGameClick = () => {
    const cardSet = this.state.cardSetType === 'animals' ? animalsCards.map(obj => ({ ...obj })) : foodCards.map(obj => ({ ...obj }));
    this.setState({
      // cardSet: shuffledArr(foodCards.map(obj => ({ ...obj }))),
      cardSet: cardSet,
    });
  };

  onCardSetChange = (event) => {
    let newCardSet;
    let newCardSetType;
    if (event.target.value === 'food') {
      newCardSet = foodCards.map(obj => ({ ...obj }));
      newCardSetType = 'food';
    } else {
      newCardSet = animalsCards.map(obj => ({ ...obj }));
      newCardSetType = 'animals';
    } 
    this.setState({
      cardSet: newCardSet,
      cardSetType: newCardSetType,
    });
  };

  render() {
    console.log('app');
    console.log(this.state);
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Main 
            onCardSetChange={this.onCardSetChange}
            onNewGameClick={this.onNewGameClick} 
            cardSet={this.state.cardSet.map(obj => ({ ...obj }))}
            cardSetType={this.state.cardSetType} 
          />
          <Footer />
          <audio src='./assets/audio/gameMusic.mp3' className='game-music' loop />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;