import React from 'react';
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

  changeLanguage = (event) => {
    this.props.changeLanguage(event);
  };

  onCardSetChange = (event) => {
    this.props.onCardSetChange(event);
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

    let musicSettingsTitle;
    let soundSettingsTitle;
    let languageSettingTitle;
    let languageSettingOptionEnText;
    let languageSettingOptionRuText;
    let cardsSettingTitle;
    let cardSettingOptionAnimalText;
    let cardSettingOptionFoodText;
    let navButtonText;

    if (this.props.language === 'en') {
      musicSettingsTitle = 'Music';
      soundSettingsTitle = 'Sounds';
      languageSettingTitle = 'Language';
      languageSettingOptionEnText = 'English';
      languageSettingOptionRuText = 'Russian';
      cardsSettingTitle = 'Cards';
      cardSettingOptionAnimalText = 'Animals';
      cardSettingOptionFoodText = 'Food';
      navButtonText = 'Menu';
    } else {
      musicSettingsTitle = 'Музыка';
      soundSettingsTitle = 'Звуки';
      languageSettingTitle = 'Язык';
      languageSettingOptionEnText = 'Английский';
      languageSettingOptionRuText = 'Русский';
      cardsSettingTitle = 'Карточки';
      cardSettingOptionAnimalText = 'Жывотные';
      cardSettingOptionFoodText = 'Еда';
      navButtonText = 'Меню';
    }

    return (
      <div className='settings-wrapper'>
        <div className='settings-window'>
          <SoundSettings
            innerText={musicSettingsTitle}
            switcherChecked={this.state.isMusicOn}
            switcherOnChange={this.props.onMusicSwitcherClikc}
            volumeValue={this.state.musicVolume}
            sliderOnChange={this.onVolumeChange}
            sliderClass='music-volume'
          />
          <SoundSettings
            innerText={soundSettingsTitle}
            switcherChecked={this.state.isSoundOn}
            switcherOnChange={this.props.onSoundSwitcherClick}
            volumeValue={this.state.soundsVolume}
            sliderOnChange={this.onVolumeChange}
            sliderClass='sounds-volume'
          />
          <div className="language">
            <div className='title'>{languageSettingTitle}</div>
              <select value={this.props.language} onChange={this.changeLanguage}>
                <option value='en'>{languageSettingOptionEnText}</option>
                <option value='ru'>{languageSettingOptionRuText}</option>
              </select>
          </div>
          <div className="cards">
            <div className='title'>{cardsSettingTitle}</div>
              <select value={this.props.cardSetType} onChange={this.onCardSetChange}>
                <option value='animals'>{cardSettingOptionAnimalText}</option>
                <option value='food'>{cardSettingOptionFoodText}</option>
              </select>
          </div>
        </div>
        <NavButton
          to='/menu'
          onClick={this.props.onButtonClickSound}
          innerText={navButtonText}
        />
      </div>
    );
  }
};

export default Settings;