import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RouterComponent } from './router';
import './app.scss';
import { FooterComponent } from './shared/components';

function App() {
  return (
    <HashRouter>
      <div className='container'>
        <RouterComponent />
      </div>
      <FooterComponent />
    </HashRouter>
  );
}

export default App;
