import React from 'react';
import Cards from '../Cards/Cards';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import WinScreen from '../WinScreen/WinScreen';
import Settings from '../Settings/Settings';
import Statistics from '../Statistics/Statistics';

import './Main.scss';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardSet: this.props.cardSet,
      cardSetType: this.props.cardSetType,
      isGameFinish: false,
      isMusicOn: false,
      isSoundOn: false,
      musicVolume: 0.5,
      soundsVolume: 0.5,
      moveCounter: 0,
      language: 'en',
      cardsQuantity: this.props.cardsQuantity,
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

  onMusicSwitcherClick = () => {
    const audio = document.querySelector('.game-music');
    audio.loop = true;
    if (!this.state.isMusicOn) {
      audio.volume = this.state.musicVolume;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    this.setState((state) => {
      return {
        isMusicOn: !state.isMusicOn,
      };
    });
  };

  onSoundSwitcherClick = () => {
    this.setState((state) => {
      return {
        isSoundOn: !state.isSoundOn,
      };
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
      newState.moveCounter++;
      return newState;
    });
  };

  addMove = () => {
    this.setState((state) => {
      return {
        moveCounter: state.moveCounter + 1,
      };
    });
  };

  onCardClick = (id) => {

    if (this.state.isSoundOn) {
      const audio = new Audio('./assets/audio/card-turn.mp3');
      audio.volume = this.state.soundsVolume;
      audio.play();
    }

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
        setTimeout(this.addMove, 1000);
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
            let rating;
            if (this.state.cardsQuantity === '18') {
              rating = JSON.parse(localStorage.getItem('ratingCardsQuantity18'));
            } else {
              rating = JSON.parse(localStorage.getItem('ratingCardsQuantity12'));
            }
            if (rating.length < 10) {
              rating.push(state.moveCounter + 1);
              rating.sort((a, b) =>  a - b );
            } else {
              for (let i = 0; i < rating.length; i++) {
                if (rating[i] > state.moveCounter) {
                  rating.push(state.moveCounter + 1);
                  break;
                }
              }
              rating.sort((a, b) =>  a - b );
              rating.splice(rating.length - 1);
            }
            if (this.state.cardsQuantity === '18') {
              rating = localStorage.setItem('ratingCardsQuantity18', JSON.stringify(rating));
            } else {
              rating = localStorage.setItem('ratingCardsQuantity12', JSON.stringify(rating));
            } 
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

  changeLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  onCardSetChange = (event) => {
    this.props.onCardSetChange(event);
  };

  onButtonClickSound = () => {
    if (this.state.isSoundOn) {
      const audio = new Audio('./assets/audio/button-click-sound.mp3');
      audio.volume = this.state.soundsVolume;
      audio.play();
    }
  };

  onVolumeChange = (event) => {
    if (event.target.classList[0] === 'music-volume') {
      document.querySelector('.game-music').volume = event.target.value;
      this.setState({
        musicVolume: event.target.value,
      });
    } else {
      this.setState({
        soundsVolume: event.target.value,
      });
    }
  };

  onMusicVolumeButtons = (action) => {
    const audio = document.querySelector('.game-music');
    audio.volume = this.state.musicVolume;
    if (action === '-') {
      if (+this.state.musicVolume !== 0) {
        audio.volume = (+audio.volume - 0.1).toFixed(2);
        this.setState((state) => {
          return {
            musicVolume: (+state.musicVolume - 0.1).toFixed(2),
          };
        });
      }
    } else {
      if (+this.state.musicVolume !== 1) {
        audio.volume = (+audio.volume + 0.1).toFixed(2);
        this.setState((state) => {
          return {
            musicVolume: (+state.musicVolume + 0.1).toFixed(2),
          };
        });
      }
    }
  };

  onSoundsVolumeButtons = (action) => {
    if (action === '-') {
      if (+this.state.soundsVolume !== 0) {
        this.setState((state) => {
          return {
            soundsVolume: (+state.soundsVolume - 0.1).toFixed(2),
          };
        });
      }
    } else {
      if (+this.state.soundsVolume !== 1) {
        this.setState((state) => {
          return {
            soundsVolume: (+state.soundsVolume + 0.1).toFixed(2),
          };
        });
      }
    }
  };

  onNewGameClick = () => {
    this.onButtonClickSound();
    this.props.onNewGameClick();
  };

  componentDidUpdate(prevProps) {

    if (this.props !== prevProps) {
      this.setState({
        cardSet: this.props.cardSet,
        cardSetType: this.props.cardSetType,
        isGameFinish: false,
        moveCounter: 0,
        cardsQuantity: this.props.cardsQuantity,
      });
    }

    if (this.isGameFinish) {
      this.isGameFinish = false;
      setTimeout(this.setGameFinishState, 1000);
    } 
  }

  onChangeLanguageButton = () => {
    this.setState((state) => {
      return {
        language: state.language === 'en' ? 'ru' : 'en',
      };
    });
  };

  render() {

    document.onkeypress = (event) => {
      if (event.key === 'q' || event.key === 'й') {
        this.onMusicSwitcherClick();
      }
      if (event.key === 'w' || event.key === 'ц') {
        this.onSoundSwitcherClick();
      }
      if (event.key === '-') {
        this.onMusicVolumeButtons('-');
      }
      if (event.key === '=') {
        this.onMusicVolumeButtons('+');
      }
      if (event.key === '_') {
        this.onSoundsVolumeButtons('-');
      }
      if (event.key === '+') {
        this.onSoundsVolumeButtons('+');
      }
      if (event.key === 'a' || event.key === 'ф') {
        this.onChangeLanguageButton();
      }
    };

    let redirectToWinScreen;
    if (this.state.isGameFinish) {
       redirectToWinScreen = <Redirect from='/game' to='/win'/>
    }

    return (
      <BrowserRouter>
        <main className='main'>
          <Route 
            path='/game' 
            render={() => {
              return (
                <Cards 
                  language={this.state.language} 
                  cardSet={this.state.cardSet} 
                  onCardClick={this.onCardClick} 
                  onButtonClickSound={this.onButtonClickSound} 
                  moveCounter={this.state.moveCounter}  
                />
              );
            }}
          />
          <Route 
            exact path='/menu' 
            render={() => {
              return (
                <Menu 
                  language={this.state.language} 
                  onNewGameClick={this.onNewGameClick} 
                  onButtonClickSound={this.onButtonClickSound}
                />
              );
            }}  
          />
          <Route 
            path='/win' 
            render={() => {
              return (
                <WinScreen 
                  language={this.state.language} 
                  onButtonClickSound={this.onButtonClickSound}
                  moveCounter={this.state.moveCounter}
                />
              );
            }} />
          <Route 
            path='/settings' 
            render={() => {
              return (
                <Settings 
                  changeLanguage={this.changeLanguage} 
                  language={this.state.language} 
                  isMusicOn={this.state.isMusicOn} 
                  isSoundOn={this.state.isSoundOn} 
                  musicVolume={this.state.musicVolume} 
                  soundsVolume={this.state.soundsVolume} 
                  onMusicSwitcherClikc={this.onMusicSwitcherClick} 
                  onSoundSwitcherClick={this.onSoundSwitcherClick} 
                  onVolumeChange={this.onVolumeChange} 
                  onButtonClickSound={this.onButtonClickSound}
                  onCardSetChange={this.onCardSetChange}
                  cardSetType={this.props.cardSetType}
                  onCardsQuantityChange={this.props.onCardsQuantityChange}
                  cardsQuantity={this.state.cardsQuantity}
                />
              );
            }} 
          />
          <Route 
            path='/statistics' 
            render={() => {
              return (
                <Statistics 
                  language={this.state.language} 
                  onButtonClickSound={this.onButtonClickSound}
                  cardsQuantity={this.state.cardsQuantity}
                />
              );
            }} 
          />
          <Redirect exact from='/' to='/menu'/>
          {redirectToWinScreen}
        </main>
      </BrowserRouter>
    );
  }
}

export default Main;

