import React from 'react';
import LandingPage from './components/landing_page/landing_page';
import NotFound from './components/404';
import './App.css';
import './scss/custom.scss';

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <NotFound />
    </div>
  );
}

export default App;
