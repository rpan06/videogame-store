import React, { Component } from 'react';
import getGameList from '../../../actions/rawg-api';
import GameItem from './game_item';
import '../../../scss/landing_page/game_list/game_list.scss';

export default class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    this.setState({
      list: await getGameList(this.props.queryCategory, this.props.queryItem),
    });
  }

  render() {
    if (!this.state.list.length) {
      return (
        <div className="w-100 d-flex justify-content-center">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      );
    }

    const galleryData = this.state.list.map((game) => <GameItem game={game} />);
    return (
      <div className="py-5">
        <h4 className="font-weight-light text-uppercase pl-2">
          {this.props.headerText}
        </h4>
        <div className="slider-container">
          <div className="photos-container">{galleryData}</div>
        </div>
      </div>
    );
  }
}
