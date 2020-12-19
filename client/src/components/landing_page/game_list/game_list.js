import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGameListData } from '../../../actions/rawg-api';
import { apiErrorAction } from '../../../actions';
import GameItem from './game_item';
import LoadingSpinner from '../../shared/loading_spinner';
import '../../../scss/landing_page/game_list/game_list.scss';

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    const response = await getGameListData(
      this.props.queryCategory,
      this.props.queryItem
    );
    if (response) {
      this.setState({
        list: response,
      });
    } else {
      this.props.apiErrorAction();
    }
  }

  render() {
    if (!this.state.list.length) {
      return <LoadingSpinner />;
    }

    const galleryData = this.state.list.map((game) => (
      <GameItem game={game} key={game.id} />
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
    redux: state.redux,
  };
}

export default connect(mapStateToProps, { apiErrorAction })(GameList);
