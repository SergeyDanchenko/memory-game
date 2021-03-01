import React from 'react';

import './Statistics.scss';
import StatisticsTableRow from './StatisticsTableRow/StatisticsTableRow';
import { Link } from 'react-router-dom';

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
        <Link to='/menu' className='back-button' onClick={this.props.onButtonClickSound}>Back</Link>
      </div>
    );
  }
}

export default Statistics;