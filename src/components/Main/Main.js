import React from 'react';
import Cards from '../Cards/Cards';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import WinScreen from '../WinScreen/WinScreen';

import './Main.scss';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardSet: this.props.cardSet,
      isGameFinish: false,
    };
    this.firstTurnedCard = null;
    this.secondTurnedCard = null;
    this.isGameFinish = false;
  }

  isPlayerWon = () => {
    return this.state.cardSet.every((cardObj) => cardObj.isGuessed === true);
  };

  setGameFinishState = () => {
    this.setState({
      isGameFinish: true,
    });
  };

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
          
          if (this.isPlayerWon()) {
            this.isGameFinish = true;
          }

          return newState;
        });
      } else {
        setTimeout(this.turnTwoCards, 1000, this.firstTurnedCard.id, this.secondTurnedCard.id);
        this.firstTurnedCard = null;
        this.secondTurnedCard = null;
      }
    }
  };

  onNewGameClick = () => {
    this.props.onNewGameClick();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        cardSet: this.props.cardSet,
        isGameFinish: false,
      });
    }
    if (this.isGameFinish) {
      
      this.isGameFinish = false;
      setTimeout(this.setGameFinishState, 1000);
    } 
  }

  render() {

    let t;
    if (this.state.isGameFinish) {
       t = <Redirect from='/game' to='/win'/>
    }

    return (
      <BrowserRouter>
        <main className='main'>
          <Route path='/game' render={() => <Cards cardSet={this.state.cardSet} onCardClick={this.onCardClick} />}/>
          <Route path='/menu' render={() => <Menu onNewGameClick={this.onNewGameClick}/>} />
          <Route path='/win' component={WinScreen} />
          <Redirect exact from='/' to='/menu'/>
          {t}
        </main>
      </BrowserRouter>
    );
  }
}

export default Main;