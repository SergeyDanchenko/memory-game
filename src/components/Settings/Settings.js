import React from 'react';
import Slider from '../Slider/Slider';
import Switcher from '../Switcher/Switcher';
import NavButton from '../NavButton/NavButton';

import './Settings.scss';
import SoundSettings from './SoundSettings/SoundSettings';


class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMusicOn: this.props.isMusicOn,
      isSoundOn: this.props.isSoundOn,
      musicVolume: this.props.musicVolume,
      soundsVolume: this.props.soundsVolume,
    };
  }

  onVolumeChange = (event) => {
    this.props.onVolumeChange(event);
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        isMusicOn: this.props.isMusicOn,
        isSoundOn: this.props.isSoundOn,
        musicVolume: this.props.musicVolume,
        soundsVolume: this.props.soundsVolume,
      });
    }
  }

  render() {
    return (
      <div className='settings-wrapper'>
        <div className='settings-window'>
          <SoundSettings 
            innerText='Music' 
            switcherChecked={this.state.isMusicOn} 
            switcherOnChange={this.props.onMusicSwitcherClikc} 
            volumeValue={this.state.musicVolume} 
            sliderOnChange={this.onVolumeChange} 
            sliderClass='music-volume' 
          />
          <SoundSettings 
            innerText='Sounds' 
            switcherChecked={this.state.isSoundOn} 
            switcherOnChange={this.props.onSoundSwitcherClick} 
            volumeValue={this.state.soundsVolume} 
            sliderOnChange={this.onVolumeChange} 
            sliderClass='sounds-volume' 
          />
        </div>
        <NavButton 
          to='/menu' 
          onClick={this.props.onButtonClickSound} 
          innerText='Back' 
        />
      </div>
    );
  }
};

export default Settings;