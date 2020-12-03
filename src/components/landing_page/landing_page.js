import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGameList } from '../../actions';
import CarouselBanner from './carousel_banner';
import GameList from './game_list/game_list';
import Ads from './ads';

/* eslint-disable */

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // state = {};
  }

  componentDidMount() {
    this.props.getGameList('genres', 'indie');
  }

  handleChange = (event) => {};

  handleSubmit = (event) => {};

  render() {
    return (
      <div className="container">
        <CarouselBanner />
        <GameList queryCategory={null} queryItem={null} headerText="Popular" />
        <Ads game={this.props.list[0]} buttonText="BUY NOW" />
        <GameList
          queryCategory="genres"
          queryItem="action"
          headerText="action"
        />
        <Ads game={this.props.list[2]} buttonText="Learn More" />
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
})(LandingPage);

/* eslint-enable */
