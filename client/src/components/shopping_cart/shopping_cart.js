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
    let total = 0;
    const shoppingListData = this.props.shoppingCart.map((item) => {
      total += Number(item.price) * Number(item.quantity);
      return <ShoppingCartItem item={item} key={item.game.id} />;
    });
    return (
      <div className="container mt-5 py-5 d-flex flex-column align-items-center">
        <h1 className="font-weight-extra-light pb-3">SHOPPING CART</h1>
        {shoppingListData}
        <div className="row w-100 d-flex flex-column align-items-end mt-3">
          <h4>
            <span className="font-weight-light">Subtotal: </span>{' '}
            <span>${total}</span>
          </h4>
          <button className="btn btn-yellow px-5 mt-5">CHECKOUT</button>
        </div>
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
