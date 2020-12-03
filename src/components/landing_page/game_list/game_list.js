import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGameList } from '../../../actions';
import GameItem from './game_item';
import '../../../scss/landing_page/game_list/game_list.scss';

/* eslint-disable */

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getGameList(this.props.queryCategory, this.props.queryItem);
  }

  render() {
    if (!this.props.list) {
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
    const galleryData = this.props.list.map((game, key) => (
      <GameItem key={key} game={game} />
    ));
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

function mapStateToProps(state) {
  return {
    list: state.list.list,
  };
}

export default connect(mapStateToProps, {
  getGameList,
})(GameList);

/* eslint-enable */
