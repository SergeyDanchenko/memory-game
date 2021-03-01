import React from 'react';
import Slider from '../Slider/Slider';
import { NavLink } from 'react-router-dom';

import './Settings.scss';

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

  onMusicSwitcherClikc = () => {
    this.props.onMusicSwitcherClikc();
  };

  onSoundSwitcherClick = () => {
    this.props.onSoundSwitcherClick();
  };

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
      <div className="settings-wrapper">
        <div className="music setting-item">
          <div className="title">Music</div>
          <label className="switch" >
            <input type="checkbox" checked={this.state.isMusicOn} onChange={this.onMusicSwitcherClikc} />
            <span className="slider" />
          </label>
          <Slider value={this.state.musicVolume} onChange={this.onVolumeChange} class='music-volume' />
        </div>
        <div className="music setting-item">
          <div className="title">Sounds</div>
          <label className="switch">
            <input type="checkbox" checked={this.state.isSoundOn} onChange={this.onSoundSwitcherClick}/>
              <span className="slider" />
          </label>
          <Slider value={this.state.soundsVolume} onChange={this.onVolumeChange} class='sounds-volume' />
        </div>
        <NavLink to='/menu' className='back' onClick={this.props.onButtonClickSound}>Back</NavLink>
      </div>
    );
  }
};

export default Settings;