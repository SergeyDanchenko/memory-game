import React from 'react';
import { NavLink } from 'react-router-dom';

import './Settings.scss';

class Settings extends React.Component {

  constructor() {
    super();
    const music = localStorage.getItem('isMusicOn') || 1;
    this.state = {
      isMusicOn: Boolean(+music),
      isSoundOn: false,
    };
  }

  musicOnOff = () => {
    localStorage.setItem('isMusicOn', this.state.isMusicOn ? 0 : 1);
    this.setState((state) => {
      return {
        isMusicOn: !state.isMusicOn,
      };
    });
  };

  render() {
    return (
      <div className="settings-wrapper">
        <div className="music setting-item">
          <div className="title">Music</div>
          <label className="switch" >
            <input type="checkbox" checked={this.state.isMusicOn} onChange={this.musicOnOff}/>
            <span className="slider" />
          </label>
        </div>
        <div className="music setting-item">
          <div className="title">Sounds</div>
          <label className="switch">
            <input type="checkbox" />
              <span className="slider" />
          </label>
        </div>
        <NavLink to='/menu' className='back'>Back</NavLink>
      </div>
    );
  }
};

export default Settings;