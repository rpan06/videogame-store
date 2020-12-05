import React from 'react';
import BannerImage from './banner_image';
import '../../../scss/landing_page/carousel_banner/carousel.scss';

export default class Carousel extends React.Component {
  componentDidMount() {
    $('.carousel').carousel();
  }

  render() {
    return (
      <div>
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="10000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselIndicators" data-slide-to="1" />
            <li data-target="#carouselIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <BannerImage gameId="3498" />
            </div>
            <div className="carousel-item">
              <BannerImage gameId="3328" />
            </div>
            <div className="carousel-item">
              <BannerImage gameId="5679" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
