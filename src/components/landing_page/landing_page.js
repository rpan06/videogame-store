import React from 'react';
import Carousel from './carousel';
import GameList from './game_list';
import Ads from './ads';

/* eslint-disable */

export default class LandingPage extends React.Component {
  state = {};

  componentDidMount() {}

  handleChange = (event) => {};

  handleSubmit = (event) => {};

  render() {
    return (
      <div className="container">
        <Carousel />
        <GameList />
        <Ads />
      </div>
    );
  }
}

/* eslint-enable */
