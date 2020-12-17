import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SanitizedHTML from 'react-sanitized-html';

/* eslint-disable */
export default (props) => (
  <div>
    <Col>
      <Row className="pb-4">
        <Col>
          <h5>Developer</h5>
          <p>{(props.game.developers !== null) ? props.game.developers[0].name : 'n/a'}</p>
        </Col>
        <Col>
          <h5>Publisher</h5>
          <p>{(props.game.publishers !== null) ? props.game.publishers[0].name : 'n/a'}</p>
        </Col>
        <Col>
          <h5>Released</h5>
          <p>{(props.game.released !== null) ? props.game.released : 'n/a'}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Metacritic</h5>
          <p>{(props.game.metacritic !== null) ? props.game.metacritic : 'n/a'}</p>
        </Col>
        <Col>
          <h5>Rating</h5>
          <p>{(props.game.rating !== null) ? props.game.rating : 'n/a'}</p>
        </Col>
        <Col>
          <h5>ESRB Rating</h5>
          <p>{(props.game.esrb_rating !== null) ? props.game.esrb_rating.name : 'n/a'}</p>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <h5>Game Description</h5>
          <SanitizedHTML
            html={props.game.description}
            allowedTags={['p', 'br']}
            className="desc"
          />
        </Col>
      </Row>
    </Col>
  </div>
);
