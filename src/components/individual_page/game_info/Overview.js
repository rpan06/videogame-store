import React, { Component } from 'react';
import { Col, Row, Image, Button } from 'react-bootstrap';
import LoadingSpinner from '../../shared/loading_spinner';
import CalculatePrice from '../../../helper/calculatePrice';
import shortenSummary from '../../../helper/shortenSummary';

export default class Overview extends Component {
  // eslint-disable-next-line class-methods-use-this
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    if (this.isEmpty(this.props.game)) {
      return <LoadingSpinner />;
    }

    const price = CalculatePrice(this.props.game.id);
    const summary = shortenSummary(this.props.game.description_raw);

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
          <Button variant="primary" size="lg" block>
            BUY NOW
          </Button>
        </Col>
      </Row>
    );
  }
}
