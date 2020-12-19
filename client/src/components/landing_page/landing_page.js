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
      <div className="container py-5 mt-5">
        <GameCarousel />
        <GameList queryCategory={null} queryItem={null} headerText="Popular" />
        <Ads game={this.state.adsList[0]} buttonText="BUY NOW" />
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
