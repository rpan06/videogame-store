import React, { Component } from 'react';
import { getGameListData } from '../../actions/rawg-api';
import { apiErrorAction } from '../../actions';
import GameCarousel from './carousel_banner/carousel';
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
    window.scrollTo(0, 0);
    const response = await getGameListData('genres', 'indie');
    if (response) {
      this.setState({
        adsList: response,
      });
    } else {
      apiErrorAction();
    }
  }

  render() {
    return (
      <div id="landing">
        <div className="container py-5 mt-5">
          <GameCarousel />
          <GameList
            queryCategory={null}
            queryItem={null}
            headerText="Popular"
          />
          <Ads game={this.state.adsList[0]} buttonText="BUY NOW" />
          <GameList
            queryCategory="tags"
            queryItem="multiplayer"
            querySort="metacritic"
            headerText="Multiplayer"
          />
          <GameList
            queryCategory="genres"
            queryItem="sports"
            headerText="Sports"
          />
          <Ads game={this.state.adsList[1]} buttonText="LEARN MORE" />
          <GameList
            queryCategory="genres"
            queryItem="adventure"
            headerText="Adventure"
          />
          <Ads game={this.state.adsList[3]} buttonText="BUY NOW" />
          <GameList
            queryCategory="developers"
            queryItem="valve-software"
            querySort="metacritic"
            headerText="Discover Valve"
          />
          <GameList
            queryCategory="genres"
            queryItem="arcade"
            querySort="metacritic"
            headerText="Arcade"
          />
          <Ads game={this.state.adsList[4]} buttonText="FACE YOUR FEARS" />
        </div>
      </div>
    );
  }
}
