import React from 'react';
import '../../scss/landing_page/ads.scss';

export default (props) => {
  if (!props.game) {
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
  const { name, background_image: backgroundImage, metacritic } = props.game;
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
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};
