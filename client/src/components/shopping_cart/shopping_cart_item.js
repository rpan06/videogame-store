/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../shared/loading_spinner';
import {
  removeGameFromShoppingCartAction,
  updateShoppingCartAction,
} from '../../actions';
import '../../scss/shopping_cart/shopping_cart.scss';

class ShoppingCartItem extends Component {
  delete() {
    this.props.removeGameFromShoppingCartAction(this.props.item);
  }

  handleChange(event) {
    const payload = this.props.item;
    payload.quantity = parseInt(event.target.value);
    this.props.updateShoppingCartAction(payload);
  }

  render() {
    if (!this.props.item) {
      return <LoadingSpinner />;
    }
    const { name, background_image: backgroundImage } = this.props.item.game;
    const gameTotalPrice = (
      Number(this.props.item.price) * Number(this.props.item.quantity)
    ).toFixed(2);
    return (
      <div className="row w-100 p-4 bg-light-grey m-0">
        <img
          className="col-4 col-md-3 sc-image"
          src={backgroundImage}
          alt={name}
        />
        <div className="col-8 col-md-6 pr-0 sc-text">
          <h3 className="font-weight-extra-light">{name}</h3>
          <div className="row d-flex align-items-baseline w-100 mx-0">
            <p onClick={this.delete.bind(this)}>
              <small className="cursor-pointer">Delete</small>
            </p>
            <span className="px-2">|</span>
            <label htmlFor="quantity">
              <small>Quantity</small>
            </label>
            <select
              className="sc-quantity cursor-pointer mx-2"
              id="quantity"
              value={this.props.item.quantity}
              onChange={this.handleChange.bind(this)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <h4 className="d-flex d-md-none font-weight-bold ">
            ${gameTotalPrice}
          </h4>
        </div>
        <div className="col-3 d-none d-md-flex justify-content-end">
          <h4 className="font-weight-bold">${gameTotalPrice}</h4>
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

export default connect(mapStateToProps, {
  removeGameFromShoppingCartAction,
  updateShoppingCartAction,
})(ShoppingCartItem);
