import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../shared/loading_spinner';
import IndividualPageBanner from './individual_page_banner';
import GameInfoPage from './game_info/GameInfoPage';
import FollowUs from './follow_us';
import Reviews from './reviews';
import {
  getSingleGameAction,
  clearSingleItemAction,
  apiErrorAction,
} from '../../actions';

class IndividualPage extends Component {
  async componentDidMount() {
    window.scrollTo(0, 0);
    const response = await this.props.getSingleGameAction(
      this.props.match.params.id
    );
    if (!response.payload) {
      this.props.apiErrorAction();
    }
  }

  componentWillUnmount() {
    this.props.clearSingleItemAction();
  }

  render() {
    if (!this.props.item) {
      return <LoadingSpinner />;
    }

    return (
      <div className="container py-5 mt-5">
        <IndividualPageBanner game={this.props.item} />
        <GameInfoPage game={this.props.item} />
        {this.props.item.metacritic_platforms && (
          <Reviews metacriticReviews={this.props.item.metacritic_platforms} />
        )}
        <FollowUs game={this.props.item} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.redux.single,
  };
}

export default connect(mapStateToProps, {
  getSingleGameAction,
  clearSingleItemAction,
  apiErrorAction,
})(IndividualPage);
