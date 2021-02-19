import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';

import './App.scss';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Main />
      <Footer />
    </div>
  );
};

export default App;