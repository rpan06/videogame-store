import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './components/landing_page/landing_page';
import IndividualPage from './components/individual_page/individual_page';
import NotFound from './components/404';
import NavBar from './components/navbar/NavBar';
import ResponsiveFooter from './components/footer/ResponsiveFooter';
import BrowsePage from './components/browse/BrowsePage';
import SearchResultPage from './components/search/SearchResultPage';
import ShoppingCart from './components/shopping_cart/shopping_cart';
import CreateAccount from './components/account/CreateAccount';
import SignIn from './components/account/SignIn';
import './App.css';
import './scss/custom.scss';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/game/:id" component={IndividualPage} />
      <Route path="/browse/:category" component={BrowsePage} />
      <Route path="/search" component={SearchResultPage} />
      <Route path="/cart" component={ShoppingCart} />
      <Route path="/register" component={CreateAccount} />
      <Route path="/signin" component={SignIn} />
      <Route component={NotFound} />
    </Switch>
    <ResponsiveFooter />
  </Router>
);

export default App;
