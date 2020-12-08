import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSingleGameData } from '../../../actions/rawg-api';
import shortenSummary from '../../../helper/shortenSummary';
import LoadingSpinner from '../../shared/loading_spinner';
import '../../../scss/landing_page/carousel_banner/banner_image.scss';

export default class BannerImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null,
    };
  }

  async componentDidMount() {
    this.setState({
      game: await getSingleGameData(this.props.gameId),
    });
  }

  render() {
    if (!this.state.game) {
      return <LoadingSpinner />;
    }

    const {
      id,
      name,
      background_image_additional: backgroundImage,
      description_raw: description,
    } = this.state.game;
    const summary = shortenSummary(description);
    return (
      <div className="row">
        <img
          className="banner-image col-12 col-lg-7 p-0"
          src={backgroundImage}
          alt=""
        />
        <div className="banner-info col-12 col-lg-5 p-5">
          <h1 className="font-weight-extra-light pb-3">{name}</h1>
          <span className="w-100 text-secondary pb-2">{summary}</span>
          <Link to={`/game/${id}`}>
            <h5 className="font-weight-light color-yellow">
              BUY NOW{' '}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </h5>
          </Link>
        </div>
      </div>
    );
  }
}
