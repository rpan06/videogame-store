import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../shared/loading_spinner';
import '../../scss/landing_page/ads.scss';

export default (props) => {
  if (!props.game) {
    return <LoadingSpinner />;
  }
  const {
    id,
    name,
    background_image: backgroundImage,
    metacritic,
  } = props.game;
  return (
    <div className="position-relative">
      <img className="ad-image" src={backgroundImage} alt={name} />
      <div className="gradient-black-overlay" />
      <div className="ad-text">
        <h1 className="m-0">{name}</h1>
        <h6 className="font-weight-light text-secondary mb-3">
          Metacritic Score:&nbsp;
          {metacritic}
        </h6>
        <button className="btn btn-yellow btn-sm px-5" type="button">
          <Link to={`/game/${id}`}>
            <span className="text-dark">{props.buttonText}</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
