/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../shared/loading_spinner';
import ShoppingCartItem from './shopping_cart_item';

class ShoppingCart extends Component {
  render() {
    if (!this.props.shoppingCart) {
      return <LoadingSpinner />;
    }
    if (this.props.shoppingCart.length === 0) {
      <div>There's nothing here!</div>;
    }
    const shoppingListData = this.props.shoppingCart.map((item) => (
      <ShoppingCartItem item={item} key={item.game.id} />
    ));
    return (
      <div className="container py-5 d-flex justify-content-center">
        <h1 className="font-weight-extra-light pb-3">SHOPPING CART</h1>
        {shoppingListData}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.list.shoppingCart,
  };
}

export default connect(mapStateToProps, {})(ShoppingCart);
