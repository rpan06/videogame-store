import React from 'react';
import PercentageCircle from '../shared/percentage_circle';
import '../../scss/individual_page/individual_page.scss';

export default (props) => {
  return (
    <div className="row py-5">
      <div className="col-12 col-md-4 text-center">
        <h2 className="font-weight-extra-light">REVIEWS</h2>
      </div>
      <div className="col-12 col-md-8 individual-page-section d-flex justify-content-center flex-wrap">
        {props.metacriticReviews.map((item) => (
          <div className="review-item mx-1">
            <a href={item.url} target="_blank" rel="noreferrer">
              <PercentageCircle percentage={item.metascore} />
              <p>
                <small>{item.platform.name}</small>
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
