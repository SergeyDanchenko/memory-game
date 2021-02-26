import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { testCardSet} from '../../cardsSets/cardsSets';
import { shuffledArr } from './../../helpFunctions/helpFunctions';

import './App.scss';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // cardSet: shuffledArr(testCardSet.map(obj => ({ ...obj }))),
      cardSet: testCardSet.map(obj => ({ ...obj })),
    };
  }

  onNewGameClick = () => {
    this.setState({
      // cardSet: shuffledArr(testCardSet.map(obj => ({ ...obj }))),
      cardSet: testCardSet.map(obj => ({ ...obj })),
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Main onNewGameClick={this.onNewGameClick} cardSet={this.state.cardSet.map(obj => ({ ...obj }))} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;