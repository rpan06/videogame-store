/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../shared/loading_spinner';
import ShoppingCartItem from './shopping_cart_item';
import '../../scss/shopping_cart/shopping_cart.scss';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({
      showOverlay: !this.state.showOverlay,
    });
  }

  render() {
    if (!this.props.shoppingCart) {
      return <LoadingSpinner />;
    }
    if (this.props.shoppingCart.length === 0) {
      return (
        <div className="generic-msg-container">
          <div className="generic-msg-content">
            <h1 className="font-weight-light">Your shopping cart is empty.</h1>
            <button className="btn btn-yellow btn-sm px-5 mt-4" type="button">
              <Link to="/">
                <span className="text-dark">Back To Home</span>
              </Link>
            </button>
          </div>
        </div>
      );
    }
    let total = 0;
    const shoppingListData = this.props.shoppingCart.map((item) => {
      total += Number(item.price) * Number(item.quantity);
      return <ShoppingCartItem item={item} key={item.game.id} />;
    });
    total = total.toFixed(2);

    return (
      <div className="container py-5 mt-5 d-flex flex-column align-items-center">
        <div
          className={`overlay ${this.state.showOverlay ? 'visible' : ''}`}
          onClick={this.toggleOverlay}
        >
          <h1 className="font-weight-light">This is a concept website.</h1>
          <h1 className="font-weight-light">
            No payments can be made through this site.
          </h1>
          <h5 className="font-weight-bold mt-3">
            Click anywhere to close this message.
          </h5>
        </div>
        <h1 className="font-weight-extra-light pb-3">SHOPPING CART</h1>
        {shoppingListData}
        <div className="sc-total">
          <h4>
            <span className="font-weight-light">Subtotal: </span>{' '}
            <span>${total}</span>
          </h4>
          <button
            className="btn btn-yellow mt-3 mt-md-5"
            onClick={this.toggleOverlay}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.redux.shoppingCart,
  };
}

export default connect(mapStateToProps, {})(ShoppingCart);
