import React from 'react';
import NavButton from '../NavButton/NavButton';
import SoundSettings from './SoundSettings/SoundSettings';
import SettingItemWithSelect from './SettingItemWithSelect/SettingItemWithSelect';

import './Settings.scss';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMusicOn: this.props.isMusicOn,
      isSoundOn: this.props.isSoundOn,
      musicVolume: this.props.musicVolume,
      soundsVolume: this.props.soundsVolume,
      cardsQuantity: this.props.cardsQuantity,
      cardSetType: this.props.cardSetType,
      language: this.props.language,
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
        cardsQuantity: this.props.cardsQuantity,
        cardSetType: this.props.cardSetType,
        language: this.props.language,
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
    let cardsNumberSettingTitle;
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
      cardsNumberSettingTitle='Number of cards'
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
      cardsNumberSettingTitle = 'Количество карт';
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
          <SettingItemWithSelect 
            title={languageSettingTitle}
            selectValue={this.state.language}
            onChange={this.changeLanguage}
            optionOneValue='en'
            optionOneText={languageSettingOptionEnText}
            optionTwoValue='ru'
            optionTwoText={languageSettingOptionRuText}
          />
          <SettingItemWithSelect 
            title={cardsSettingTitle}
            selectValue={this.state.cardSetType}
            onChange={this.onCardSetChange}
            optionOneValue='animals'
            optionOneText={cardSettingOptionAnimalText}
            optionTwoValue='food'
            optionTwoText={cardSettingOptionFoodText}
          />
          <SettingItemWithSelect 
            title={cardsNumberSettingTitle}
            selectValue={this.state.cardsQuantity}
            onChange={this.props.onCardsQuantityChange}
            optionOneValue='18'
            optionOneText='18'
            optionTwoValue='12'
            optionTwoText='12'
          />
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