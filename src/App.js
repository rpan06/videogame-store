import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './components/landing_page/landing_page';
import NotFound from './components/404';
import NavBar from './components/navbar/NavBar';
import './App.css';
import './scss/custom.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
        {/* <NotFound /> */}
      </Switch>
    </Router>
  );
}

export default App;
