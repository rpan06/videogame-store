import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopInfo from './TopInfo';
import Overview from './Overview';
import '../../../scss/individual_page/individual_page_game_info.scss';

export default (props) => {
  if (!props.game.id) {
    return '';
  }
  return (
    <Container className="pt-5 mt-3" id="game-info-container">
      <Overview game={props.game} />
      <Row>
        <Col className="about-game d-none d-lg-block font-weight-extra-light">
          ABOUT GAME
        </Col>
        <TopInfo game={props.game} />
      </Row>
    </Container>
  );
};
