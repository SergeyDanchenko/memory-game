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

    return (
      <div className='statistic-wrapper'>
        <div className='statistics-table'>
          <StatisticsTableRow rating='Rating' moves='Moves' />
          {ratings.map((elem, index) => <StatisticsTableRow key={index} rating={index + 1} moves={elem} />)}
        </div>
        <NavButton to='/menu' onClick={this.props.onButtonClickSound} innerText='Back' />
      </div>
    );
  }
}

export default Statistics;