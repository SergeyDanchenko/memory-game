import React from 'react';

import './Statistics.scss';
import StatisticsTableRow from './StatisticsTableRow/StatisticsTableRow';
import NavButton from '../NavButton/NavButton';

class Statistics extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const ratings = JSON.parse(localStorage.getItem('rating'));

    let ratingRowTitle;
    let movesRowTitle;
    let navButtonText;

    if (this.props.language === 'en') {
      ratingRowTitle = 'Rating';
      movesRowTitle = 'Moves';
      navButtonText = 'Menu';
    } else {
      ratingRowTitle = 'Рейтинг';
      movesRowTitle = 'Ходы';
      navButtonText = 'Меню';
    }

    return (
      <div className='statistic-wrapper'>
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