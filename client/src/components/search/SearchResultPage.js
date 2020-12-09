/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameItem from '../landing_page/game_list/game_item';
import LoadingSpinner from '../shared/loading_spinner';
import config from '../../config';
import '../../scss/search/search.scss';

export default function SearchResultPage(props) {
  const searchTerm = props.location.search.replace('?query=', '');;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games?search=${searchTerm}`,
      {
        headers: {
          'x-rapidapi-key': config.RAWG_API_KEY,
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('Request failed', error);
      });
  }, []);

  let gameData = null;

  if (!data.results) {
    return <LoadingSpinner />
  }

  if (data.results) {
    gameData = data.results.map((data) => <GameItem game={data} />);
  }

  return (
    <Container className="py-5">
      <Row>
        <Col className="pb-3 mb-4 gray-border">
          <span className="search-header pl-2">Search Results</span>
        </Col>
      </Row>
      <Row>
        <Col id="search-container">
          {gameData}
        </Col>
      </Row>
    </Container>
  )
}
