/* eslint-disable */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoadingSpinner from '../../shared/loading_spinner';

export default class TopInfo extends Component {
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    if (this.isEmpty(this.props.game)) {
      return <LoadingSpinner />
    } else {
      return (
        <Col lg={{ span: 8, offset: 2 }} id="game-info-top">
          <Row className="pb-4">
            <Col>
              <h5>Developer</h5>
              <p>{this.props.game.developers[0].name}</p>
            </Col>
            <Col>
              <h5>Publisher</h5>
              <p>{this.props.game.publishers[0].name}</p>
            </Col>
            <Col>
              <h5>Released</h5>
              <p>{this.props.game.released}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Metacritic</h5>
              <p>{this.props.game.metacritic}</p>
            </Col>
            <Col>
              <h5>Rating</h5>
              <p>{this.props.game.rating}</p>
            </Col>
            <Col>
              <h5>ESRB Rating</h5>
              {this.props.game.esrb_rating.name}
            </Col>
          </Row>
        </Col>
      );
    }
  }
}
