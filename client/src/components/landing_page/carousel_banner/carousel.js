import React from 'react';
import { Carousel } from 'react-bootstrap';
import BannerImage from './banner_image';
import '../../../scss/landing_page/carousel_banner/carousel.scss';

export default class GameCarousel extends React.Component {
  componentDidMount() {
    $('.carousel').carousel();
  }

  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <BannerImage gameId="3498" />
          </Carousel.Item>
          <Carousel.Item>
            <BannerImage gameId="3328" />
          </Carousel.Item>
          <Carousel.Item>
            <BannerImage gameId="58175" />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
