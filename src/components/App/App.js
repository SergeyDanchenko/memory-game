import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Main />
        {/* <Route path='/' component={Main} /> */}
        <Footer />
      </div>
    </BrowserRouter>

  );
};

export default App;