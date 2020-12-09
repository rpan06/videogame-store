/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../shared/loading_spinner';
import {
  removeGameFromShoppingCartAction,
  updateShoppingCartAction,
} from '../../actions';

class ShoppingCartItem extends Component {
  componentDidMount() {
    console.log('item', this.props);
  }

  delete() {
    this.props.removeGameFromShoppingCartAction(this.props.item);
    console.log(this.props);
  }

  update() {
    // get new quantity information and send through in payload
    this.props.updateShoppingCartAction(this.props.item);
  }

  render() {
    if (!this.props.item) {
      return <LoadingSpinner />;
    }
    const { name, background_imgae: backgroundImage } = this.props.item.game;
    return (
      <div className="container my-5">
        <div>
          <img src="backgroundImage" alt="" />
          <div>
            <h5>{name}</h5>
            <div className="row">
              <p onClick={this.update.bind(this)}>Quantity</p> |
              <p onClick={this.delete.bind(this)}>Delete</p>
            </div>
          </div>
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
