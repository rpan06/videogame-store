import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SanitizedHTML from 'react-sanitized-html';

export default (props) => (
  <div>
    <Col>
      <Row className="pb-4">
        <Col>
          <h5>Developer</h5>
          <p>{props.game.developers[0].name}</p>
        </Col>
        <Col>
          <h5>Publisher</h5>
          <p>{props.game.publishers[0].name}</p>
        </Col>
        <Col>
          <h5>Released</h5>
          <p>{props.game.released}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Metacritic</h5>
          <p>{props.game.metacritic}</p>
        </Col>
        <Col>
          <h5>Rating</h5>
          <p>{props.game.rating}</p>
        </Col>
        <Col>
          <h5>ESRB Rating</h5>
          {props.game.esrb_rating.name}
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
