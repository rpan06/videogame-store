/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Image, Button } from 'react-bootstrap';
import CalculatePrice from '../../../helper/calculatePrice';
import ShortenSummary from '../../../helper/shortenSummary';
import { addGameToShoppingCartAction } from '../../../actions';

class Overview extends Component {
  buyNowFunction(game, price, quantity = 1) {
    this.props.addGameToShoppingCartAction({ game, price, quantity });
    window.location.href = '/cart';
  }

  render() {
    const price = CalculatePrice(this.props.game.id);
    const summary = ShortenSummary(this.props.game.description_raw);

    return (
      <Row className="mb-4 d-flex overview">
        <Col xs={12} lg={3} className="pb-5">
          <Image src={this.props.game.background_image} fluid />
        </Col>
        <Col xs={12} lg={7} className="pb-4 game-desc">
          <h5 className="pb-2">{this.props.game.name}</h5>
          {summary}
        </Col>
        <Col xs={12} lg={2} className="text-right pb-5">
          <p>{`$${price}`}</p>
          <Button
            variant="btn btn-yellow"
            size="lg"
            onClick={() => this.buyNowFunction(this.props.game, price, 1)}
            block
          >
            BUY NOW
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, {
  addGameToShoppingCartAction,
})(Overview);
