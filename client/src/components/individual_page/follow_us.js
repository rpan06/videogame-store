import React from 'react';
import '../../scss/individual_page/individual_page.scss';
import redditImage from '../../assets/reddit.svg';
import globeImage from '../../assets/globe.svg';

export default (props) => {
  const { website, reddit_url: redditUrl } = props.game;
  return (
    <div className="row py-5">
      <div className="col-12 col-md-2 text-center pb-4">
        <h2 className="font-weight-extra-light">FOLLOW US</h2>
      </div>
      <div className="col-12 col-md-10 individual-page-section d-flex justify-content-center social-icons">
        {website && (
          <a href={website} target="_blank" rel="noreferrer">
            <img src={globeImage} alt="globe icon" className="mx-4" />
          </a>
        )}
        {redditUrl && (
          <a href={redditUrl} target="_blank" rel="noreferrer">
            <img src={redditImage} alt="reddit icon" className="mx-4" />
          </a>
        )}
      </div>
    </div>
  );
};
