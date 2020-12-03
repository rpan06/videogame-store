import React, { Component } from 'react';
import getGameList from '../../actions/rawg-api';
import CarouselBanner from './carousel_banner';
import GameList from './game_list/game_list';
import Ads from './ads';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adsList: [],
    };
  }

  async componentDidMount() {
    this.setState({
      adsList: await getGameList('genres', 'indie'),
    });
  }

  render() {
    return (
      <div className="container">
        <CarouselBanner />
        <GameList queryCategory={null} queryItem={null} headerText="Popular" />
        <Ads game={this.state.adsList[0]} buttonText="BUY NOW" />
        {/* <GameList */}
        <GameList
          queryCategory="genres"
          queryItem="adventure"
          headerText="adventure"
        />
        <Ads game={this.state.adsList[1]} buttonText="Learn More" />
      </div>
    );
  }
}
