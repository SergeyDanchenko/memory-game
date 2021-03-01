import React from 'react';
import Cards from '../Cards/Cards';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import WinScreen from '../WinScreen/WinScreen';
import Settings from '../Settings/Settings';

import './Main.scss';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardSet: this.props.cardSet,
      isGameFinish: false,
      isMusicOn: false,
      isSoundOn: false,
      musicVolume: 0.5,
      soundsVolume: 0.5,
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
      return newState;
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
    if (action === '-') {
      if (this.state.musicVolume !== 0) {
        audio.volume = +(audio.volume - 0.1).toFixed(2);
        this.setState((state) => {
          return {
            musicVolume: +(state.musicVolume - 0.1).toFixed(2),
          };
        });
      }
    } else {
      if (this.state.musicVolume !== 1) {
        audio.volume = +(audio.volume + 0.1).toFixed(2);
        this.setState((state) => {
          return {
            musicVolume: +(state.musicVolume + 0.1).toFixed(2),
          };
        });
      }
    }
  };

  onSoundsVolumeButtons = (action) => {
    if (action === '-') {
      if (this.state.soundsVolume !== 0) {
        this.setState((state) => {
          return {
            soundsVolume: +(state.soundsVolume - 0.1).toFixed(2),
          };
        });
      }
    } else {
      if (this.state.soundsVolume !== 1) {
        this.setState((state) => {
          return {
            soundsVolume: +(state.soundsVolume + 0.1).toFixed(2),
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
        isGameFinish: false,
      });
    }

    if (this.isGameFinish) {
      this.isGameFinish = false;
      setTimeout(this.setGameFinishState, 1000);
    } 
  }

  render() {

    document.onkeypress = (event) => {
      if (event.key === 'q') {
        this.onMusicSwitcherClick();
      }
      if (event.key === 'w') {
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
    };

    let t;
    if (this.state.isGameFinish) {
       t = <Redirect from='/game' to='/win'/>
    }

    return (
      <BrowserRouter>
        <main className='main'>
          <Route 
            path='/game' 
            render={() => <Cards cardSet={this.state.cardSet} onCardClick={this.onCardClick} onButtonClickSound={this.onButtonClickSound}/>}/>
          <Route 
            exact path='/menu' 
            render={() => <Menu onNewGameClick={this.onNewGameClick} onButtonClickSound={this.onButtonClickSound}/>} />
          <Route 
            path='/win' 
            render={() => <WinScreen onButtonClickSound={this.onButtonClickSound} />} />
          <Route 
            path='/settings' 
            render={() => <Settings isMusicOn={this.state.isMusicOn} isSoundOn={this.state.isSoundOn} musicVolume={this.state.musicVolume} soundsVolume={this.state.soundsVolume} onMusicSwitcherClikc={this.onMusicSwitcherClick} onSoundSwitcherClick={this.onSoundSwitcherClick} onVolumeChange={this.onVolumeChange} onButtonClickSound={this.onButtonClickSound} />} />
          <Redirect exact from='/' to='/menu'/>
          {t}
        </main>
      </BrowserRouter>
    );
  }
}

export default Main;

