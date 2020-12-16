import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Login from './components/account/Login';
import './App.css';
import './scss/custom.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar user={this.props.user} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/game/:id" component={IndividualPage} />
          <Route path="/browse/:category" component={BrowsePage} />
          <Route path="/search" component={SearchResultPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/register" component={CreateAccount} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <ResponsiveFooter />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.redux.user,
  };
};

export default connect(mapStateToProps)(App);
