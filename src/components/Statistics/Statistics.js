import React from 'react';
import StatisticsTableRow from './StatisticsTableRow/StatisticsTableRow';
import NavButton from '../NavButton/NavButton';

import './Statistics.scss';

class Statistics extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let ratings;
    if (this.props.cardsQuantity === '18') {
      ratings = JSON.parse(localStorage.getItem('ratingCardsQuantity18'));
    } else {
      ratings = JSON.parse(localStorage.getItem('ratingCardsQuantity12'));
    }

    let ratingcardsQuantityInfo;
    let ratingRowTitle;
    let movesRowTitle;
    let navButtonText;

    if (this.props.language === 'en') {
      ratingcardsQuantityInfo = 'Number of cards:';
      ratingRowTitle = 'Rating';
      movesRowTitle = 'Moves';
      navButtonText = 'Menu';
    } else {
      ratingRowTitle = 'Рейтинг';
      movesRowTitle = 'Ходы';
      navButtonText = 'Меню';
      ratingcardsQuantityInfo = 'Количество карт:';
    }

    return (
      <div className='statistic-wrapper'>
        <div className='table-info'>
          {`${ratingcardsQuantityInfo} ${this.props.cardsQuantity}`}
        </div>
        <div className='statistics-table'>
          <StatisticsTableRow rating={ratingRowTitle} moves={movesRowTitle} />
          {ratings.map((elem, index) => <StatisticsTableRow key={index} rating={index + 1} moves={elem} />)}
        </div>
        <NavButton to='/menu' onClick={this.props.onButtonClickSound} innerText={navButtonText} />
      </div>
    );
  }
}

export default Statistics;