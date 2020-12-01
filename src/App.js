import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import LandingPage from './components/landing_page/landing_page';
import NotFound from './components/404';
import NavBar from './components/navbar/NavBar';
import './App.css';
import './scss/custom.scss';

function App() {
  return (
    <Router>
      <Switch>
        {/* <LandingPage /> */}
        {/* eventually replace below route with landing page */}
        <NavBar />
        <Route exact path="/" component={NotFound} />
        <Route component={NotFound} />
        <NotFound />
      </Switch>
    </Router>
  );
}

export default App;
