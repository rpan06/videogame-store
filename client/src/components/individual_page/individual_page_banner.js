import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../scss/individual_page/individual_page_banner.scss';

export default class IndividualPageBanner2 extends React.Component {
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
      <>
        <Carousel>
          <Carousel.Item>
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
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="individual-banner-image"
              src={image}
              alt="background_image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="individual-banner-image"
              src={imageAdditional}
              alt="background_image"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
