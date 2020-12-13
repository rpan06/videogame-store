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
// import { autoLogin } from './actions/user';
import './App.css';
import './scss/custom.scss';

class App extends Component {
  componentDidMount() {
    if (this.props.userReducer.loggedIn) {
      console.log(`Welcome, ${this.props.userReducer.user.username}`);
    }
  }

  /* eslint-disable */
  render() {
    return (
      <Router>
        <NavBar />
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
    userReducer: state.userReducer,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: () => dispatch(autoLogin()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);
