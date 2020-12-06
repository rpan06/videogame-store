/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingSpinner from '../../shared/loading_spinner';
import TopInfo from './TopInfo';
import '../../../scss/individual_page/individual_page_game_info.scss';

export default function GameInfoPage(props) {
  return (
    <Container className="pt-5 mt-3" id="game-info-container">
      <Row>
        <Col lg={2} className="about-game">
          About Game
          </Col>
        <TopInfo game={props.game} />
      </Row>
    </Container>
  );
}
