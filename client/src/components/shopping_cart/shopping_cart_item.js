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
  componentDidMount() {
    // console.log('item', this.props);
  }

  delete() {
    this.props.removeGameFromShoppingCartAction(this.props.item);
  }

  handleChange(event) {
    const payload = this.props.item;
    payload.quantity = parseInt(event.target.value);
    this.props.updateShoppingCartAction(payload);
  }

  // update() {
  //   // get new quantity information and send through in payload
  //   this.props.updateShoppingCartAction(this.props.item);
  // }

  render() {
    if (!this.props.item) {
      return <LoadingSpinner />;
    }
    const { name, background_image: backgroundImage } = this.props.item.game;
    const gameTotalPrice =
      Number(this.props.item.price) * Number(this.props.item.quantity);
    return (
      <div className="row w-100 p-4 bg-light-grey">
        <div className="col-9 d-flex">
          <img className="sc-image mr-4" src={backgroundImage} alt={name} />
          <div className="d-flex flex-column align-items-center">
            <h3 className="font-weight-extra-light">{name}</h3>
            <div className="row d-flex align-items-baseline w-100">
              <p onClick={this.delete.bind(this)}>Delete</p>
              <span className="px-2">|</span>
              <label htmlFor="quantity">Quantity</label>
              <select
                className="form-control form-control-sm col-3 mx-2"
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
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <h5 className="font-weight-bold">${gameTotalPrice}</h5>
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

export default connect(mapStateToProps, {
  removeGameFromShoppingCartAction,
  updateShoppingCartAction,
})(ShoppingCartItem);
