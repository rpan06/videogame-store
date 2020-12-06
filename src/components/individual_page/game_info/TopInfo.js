/* eslint-disable */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoadingSpinner from '../../shared/loading_spinner';
import SanitizedHTML from 'sanitize-html';

export default class TopInfo extends Component {
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    if (this.isEmpty(this.props.game)) {
      return <LoadingSpinner />;
    } else {
      return (
        <>
          <Col>
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
            <Row className="pt-4">
              <Col>
                <h5>Game Description</h5>
                <SanitizedHTML
                  html={this.props.game.description}
                  allowedTags={['p', 'br']}
                  className="desc"
                />
              </Col>
            </Row>
          </Col>
        </>
      );
    }
  }
}
