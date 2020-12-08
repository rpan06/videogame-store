import React from 'react';
import '../../scss/individual_page/individual_page_banner.scss';

export default class IndividualPageBanner extends React.Component {
  componentDidMount() {
    $('.carousel').carousel();
  }

  render() {
    const {
      clip,
      background_image: image,
      background_image_additional: imageAdditional,
    } = this.props.game;
    return (
      <div>
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="100000"
        >
          <ol className="carousel-indicators individual-page">
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
              {clip ? (
                <video
                  className="individual-banner-image"
                  autoPlay
                  muted
                  controls
                  loop
                >
                  <source src={clip.clips.full} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className="individual-banner-image"
                  src={imageAdditional}
                  alt="background_image"
                />
              )}
            </div>
            <div className="carousel-item">
              <img
                className="individual-banner-image"
                src={image}
                alt="background_image"
              />
            </div>
            <div className="carousel-item">
              <img
                className="individual-banner-image"
                src={imageAdditional}
                alt="background_image"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev individual-page"
            href="#carouselIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next individual-page"
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
